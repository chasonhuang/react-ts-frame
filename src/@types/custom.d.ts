declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare module "shared-worker-loader!*" {
  class WebpackSharedWorker extends SharedWorker {
    constructor();
  }

  export default WebpackSharedWorker;
}

declare var onconnect: (e: MessageEvent) => void;

declare module "*.png";

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}