import { plainToClass } from "class-transformer";
import Cookies from "js-cookie";
import { ObjectUtils } from "ts-commons";

const userId = ObjectUtils.getOrDefault(Cookies.get("userId"), "userIdPlaceholder");

class RestResponse<D = any> {
  public code: string | number;
  public data: D;
  public datas: D;
  public message: string;
}

export default async <D = any>(url: string, init?: RequestInit): Promise<D> => {
  try {
    const myInit: RequestInit = ObjectUtils.getOrDefault(init, {});
    const myHeaders: any = ObjectUtils.getOrDefault(myInit.headers, {});
    myHeaders.userId = ObjectUtils.getOrDefault(myHeaders.userId, userId);
    myInit.headers = myHeaders;
    myInit.credentials = ObjectUtils.getOrDefault(myInit.credentials, "include");
    const response = await fetch(url, myInit);

    if (response.ok) {
      const json = await response.json();
      const result = plainToClass<RestResponse<any>, any>(RestResponse, json);

      if (result.code === "0" || result.code === 0) {
        return Promise.resolve(ObjectUtils.getOrDefault(result.data, result.datas));
      }

      return Promise.reject(result.message);
    }

    return Promise.reject(response.statusText);
  } catch (error) {
    return Promise.reject(error);
  }
};
