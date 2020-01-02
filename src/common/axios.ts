import axios, { AxiosResponse, Canceler } from "axios";
import md5 from "blueimp-md5";
import Cookies from "js-cookie";
import qs from "qs";
import { ObjectUtils, StringUtils } from "ts-commons";
import { ApiResponse } from "../interfaces/apiResponse";
import { RequestConfig } from "../interfaces/requestConfig";

const userId = ObjectUtils.getOrDefault(Cookies.get("userId"), "userIdPlaceholder");
const requestMap = new Map<symbol, Canceler>();

/**
 * request
 */
export async function request<T = any, R = AxiosResponse<T>>(config: RequestConfig): Promise<R> {
  const { requestId, abortContext, ...restConfig } = config;

  // withCredentials
  restConfig.withCredentials = ObjectUtils.getOrDefault(restConfig.withCredentials, true);

  // headers
  const myHeaders: any = ObjectUtils.getOrDefault(restConfig.headers, {});
  myHeaders.userId = ObjectUtils.getOrDefault(myHeaders.userId, userId);
  restConfig.headers = myHeaders;

  // cancel
  if (typeof requestId !== "undefined" || typeof abortContext !== "undefined") {
    if (typeof requestId !== "undefined" && requestMap.has(requestId)) {
      const c = requestMap.get(requestId);

      if (typeof c !== "undefined") {
        c("cancel");
      }

      requestMap.delete(requestId);
    }

    restConfig.cancelToken = new axios.CancelToken(cancel => {
      if (typeof requestId !== "undefined") {
        requestMap.set(requestId, cancel);
      }

      if (typeof abortContext !== "undefined") {
        abortContext.abort = () => {
          if (typeof requestId !== "undefined" && requestMap.has(requestId)) {
            requestMap.delete(requestId);
          }

          cancel("cancel");
        };
      }
    });
  }

  try {
    const r = await axios.request<T, R>(restConfig);

    return Promise.resolve(r);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * json
 */
export async function json<T = any>(config: RequestConfig): Promise<T> {
  try {
    const response = await request<T>(config);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * api
 */
export async function api<T = any>(config: RequestConfig): Promise<T> {
  try {
    let deviceId = Cookies.get("device_id");

    if (StringUtils.isBlank(deviceId)) {
      deviceId = md5(Math.random().toString());
      Cookies.set("device_id", deviceId, { domain: ".innodealing.com" });
    }

    if (typeof config.params !== "undefined") {
      if (config.params instanceof URLSearchParams) {
        config.params.set("timestamp", new Date().getTime().toString());
        config.params.sort();
        let paramsString = "";
        config.params.forEach((value, key) => {
          if (typeof value === "number" || typeof value === "string") {
            paramsString += value;
          }
        });
        config.params.set("sign", md5(paramsString + deviceId));
      } else if (typeof config.params === "object") {
        config.paramsSerializer = ObjectUtils.getOrDefault(config.paramsSerializer, params => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        });

        let paramsString = "";
        config.params.timestamp = new Date().getTime().toString();
        Object.keys(config.params)
          .sort()
          .forEach(key => {
            const value = config.params[key];
            if (typeof value === "number" || typeof value === "string") {
              paramsString += value;
            } else if (value instanceof Array) {
              paramsString += value.join("");
            }
          });
        config.params.sign = md5(paramsString + deviceId);
      }
    } else {
      config.params = {};
      config.params.timestamp = new Date().getTime().toString();
      config.params.sign = md5(config.params.timestamp + deviceId);
    }

    const data = await json<ApiResponse<T>>(config);

    if (data.code === "0" || data.code === 0) {
      return Promise.resolve(data.data);
    }

    return Promise.reject(data.message);
  } catch (error) {
    return Promise.reject(error);
  }
}
