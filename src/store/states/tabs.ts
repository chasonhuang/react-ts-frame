export interface Tab {
  id: string;
  title: string;
  path: string;
  status: object;
}

export type Tabs = Tab[];
export const tabs: Tabs = [
  {
    id: "BROKER",
    title: "经纪商行情",
    path: "/bond/broker-market",
    status: {},
  },
  {
    id: "EXCHANGE",
    title: "交易所行情",
    path: "/bond/exchange-market",
    status: {},
  },
];
