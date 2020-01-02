import Cookies from "js-cookie";
import { ObjectUtils } from "ts-commons";

const userId = ObjectUtils.getOrDefault(Cookies.get("userId"), "userIdPlaceholder");

export default async (url: string, init?: RequestInit): Promise<void> => {
  try {
    const myInit: RequestInit = ObjectUtils.getOrDefault(init, {});
    const myHeaders: any = ObjectUtils.getOrDefault(myInit.headers, {});
    myHeaders.userId = ObjectUtils.getOrDefault(myHeaders.userId, userId);
    myInit.headers = myHeaders;
    myInit.credentials = ObjectUtils.getOrDefault(myInit.credentials, "include");
    await fetch(url, myInit).then(res => {
      const contentDisposition = res.headers.get("Content-Disposition");
      let urlDownload = "filename.pdf";
      if (ObjectUtils.hasValue(contentDisposition)) {
        urlDownload = contentDisposition.substr(contentDisposition.indexOf("filename=") + 9);
        urlDownload = decodeURIComponent(urlDownload).replace(/\"/g, "");
      } else {
        // 为了保证取的路径正确
        const arr: string[] = res.url
          .split("?")[1]
          .split("&")[1]
          .split("=")[1]
          .split("/");
        urlDownload = res.url
          .split("?")[1]
          .split("&")[1]
          .split("=")[1]
          .split("/")[arr.length - 1];
        urlDownload = decodeURIComponent(urlDownload).replace(/\"/g, "");
      }
      res.blob().then(blob => {
        const urls = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = urls;
        a.download = urlDownload;
        a.click();
      });
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
