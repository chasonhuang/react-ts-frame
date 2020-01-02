// get define from webpack
declare const SOCKET_IO_URL: string;
declare const PUBLIC_PATH: string;
declare const API_URL: string;
declare const HOST_URL: string;
declare const BAIDU_TONGJI_KEY: string;
declare const VERSION: string;

export class DefineService {
  private static instance = new DefineService();

  private constructor() {
    this.logDefines();
  }

  public static get Instance() {
    return this.instance;
  }

  public getSocketIoUrl(): string {
    return SOCKET_IO_URL;
  }

  public getPublicPath(): string {
    return PUBLIC_PATH;
  }

  public getApiUrl(): string {
    return API_URL;
  }

  public getHostUrl(): string {
    return HOST_URL;
  }

  public getBaiduTongjiKey(): string {
    return BAIDU_TONGJI_KEY;
  }

  public getVersion(): string {
    return VERSION;
  }

  private logDefines(): void {
    console.log("==== log define =====");
    console.log("socketIoUrl: ", SOCKET_IO_URL);
    console.log("apiUrl", API_URL);
    console.info("version: ", VERSION);
  }
}
