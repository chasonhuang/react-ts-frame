import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ObjectUtils } from "ts-commons";
import { AbortContext } from "../interfaces/abortContext";
import { RequestConfig } from "../interfaces/requestConfig";

const userId = ObjectUtils.getOrDefault(Cookies.get("userId"), "userIdPlaceholder");

/**
 * http service
 */
export class HttpService {
  /**
   * request
   */
  public static async request<T = any>(config: RequestConfig, abortContext?: AbortContext): Promise<AxiosResponse<T>> {
    try {
      const axiosRequestConfig: AxiosRequestConfig = config;
      axiosRequestConfig.withCredentials = ObjectUtils.getOrDefault(axiosRequestConfig.withCredentials, true);
      const myHeaders: any = ObjectUtils.getOrDefault(axiosRequestConfig.headers, {});
      myHeaders.userId = ObjectUtils.getOrDefault(myHeaders.userId, userId);
      axiosRequestConfig.headers = myHeaders;
      if (typeof abortContext !== "undefined") {
        axiosRequestConfig.cancelToken = new axios.CancelToken(cancel => {
          abortContext.abort = cancel;
        });
      }
      const response = await axios.request<T>(axiosRequestConfig);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // /**
  //  * api
  //  */
  // public static async api<T = any>(config: RequestConfig, abortContext?: AbortContext): Promise<T> {
  //   try {
  //     const res = await this.json<ApiResponse<T>>(config, abortContext);
  //     if (ObjectUtils.hasValue(res.data.data)) {
  //       return Promise.resolve(res.data.data);
  //     }
  //     return Promise.reject("data is undefined");
  //   } catch (error) {
  //     let data = {};
  //     if (typeof error.response === "object") {
  //       if (typeof error.response.data === "object") {
  //         const { code, message } = error.response.data as ApiResponse<T>;
  //         data = { ...error.response.data, statusCode: parseInt(code + "", 10), message };
  //       }
  //     } else if (axios.isCancel(error)) {
  //       data = { statusCode: StatusCode.Cancel, message: "cancel" };
  //     } else {
  //       data = { statusCode: StatusCode.Error, message: "error" };
  //     }
  //     return Promise.reject(data);
  //   }
  // }

  // /**
  //  * json
  //  */
  // public static async json<T = any>(config: RequestConfig, abortContext?: AbortContext): Promise<T> {
  //   try {
  //     const data = await this.request<T>(config, abortContext);
  //     return Promise.resolve(data);
  //   } catch (error) {
  //     let data = {};
  //     if (error.response) {
  //       data = {
  //         ...error.response.data,
  //         statusCode: error.response.status,
  //         message: error.response.statusText,
  //       };
  //     } else if (axios.isCancel(error)) {
  //       data = { statusCode: StatusCode.Cancel, message: "cancel" };
  //     } else {
  //       data = { statusCode: StatusCode.Error, message: "error" };
  //     }
  //     return Promise.reject(data);
  //   }
  // }

  /**
   * file
   */
  public static async file(config: RequestConfig) {
    const res = await this.request(config);
    const contentType = res.headers["content-type"];
    const blob = new Blob([res.data], {
      type: contentType,
    });
    const contentDisposition = res.headers["content-disposition"];
    let fileName = "";
    if (ObjectUtils.hasValue(contentDisposition)) {
      fileName = contentDisposition.substr(contentDisposition.indexOf("filename=") + 9);
      fileName = decodeURIComponent(fileName).replace(/\"/g, "");
    }
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
  }

  private constructor() {}
}
