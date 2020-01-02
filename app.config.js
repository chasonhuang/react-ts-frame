const version = "3.0.1";

module.exports = {
  dev: {
    version,
    publicPath: "",
    apiUrl: "https://r.qa.innodealing.com",
    hostUrl: "https://w.qa.innodealing.com",
    socketIoUrl: "https://socketio.qa.innodealing.com/broker_market_web",
    baiduTongjiKey: "e00de90b5fbe41ccc142957e62106b11",
  },
  alpha: {
    version,
    publicPath: "http://alpha.qa.innodealing.com/quote-web/",
    apiUrl: "http://alpha.qa.innodealing.com",
    hostUrl: "http://alpha.qa.innodealing.com",
    socketIoUrl: "https://socketio.qa.innodealing.com/broker_market_web",
    baiduTongjiKey: "e00de90b5fbe41ccc142957e62106b11",
  },
  qa: {
    version,
    publicPath: "https://w.qa.innodealing.com/quote-web/",
    apiUrl: "https://r.qa.innodealing.com",
    hostUrl: "https://w.qa.innodealing.com",
    socketIoUrl: "https://socketio.qa.innodealing.com/broker_market_web",
    baiduTongjiKey: "e00de90b5fbe41ccc142957e62106b11",
  },
  uat: {
    version,
    publicPath: "https://web.uat.innodealing.com/quote-web/",
    apiUrl: "https://rest.uat.innodealing.com",
    hostUrl: "https://web.uat.innodealing.com",
    socketIoUrl: "https://socketio.uat.innodealing.com/broker_market_web",
    baiduTongjiKey: "647e7b2465711bfbf4ce09080f940778",
  },
  prod: {
    version,
    publicPath: "https://web.innodealing.com/quote-web/",
    apiUrl: "https://rest.innodealing.com",
    hostUrl: "https://web.innodealing.com",
    socketIoUrl: "https://socketio.innodealing.com/broker_market_web",
    baiduTongjiKey: "abfd95f76b44ec8e7d8b43fd231c8386",
  },
};
