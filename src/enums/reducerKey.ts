/**
 * reducer key
 */
export enum ReducerKey {
  Router = "router",
  App = "app",

  //#region bond
  Bond = "bond",
  Bond_BondRadar = "bond_bondRadar",
  Bond_BrokerMarket = "bond_brokersMarket",
  Bond_ExchangeMarket = "bond_exchangeMarket",
  Bond_CityInvestment = "bond_cityInvestment",
  Bond_FavoriteBond = "bond_favoriteBond",
  Bond_PriceMonitor = "bond_priceMonitor",
  Bond_PrimaryIssue = "bond_primaryIssue",
  Bond_RatingWall = "bond_ratingWall",
  Bond_RiskBond = "bond_riskBond",
  Bond_SpreadsTrend = "bond_spreadsTrend",
  //#endregion

  //#region dm intl
  DMIntl = "DMIntl",
  DMIntl_Detail = "DMIntl_Detail",
  DMIntl_Analysis_RatingWall = "DMIntl_Analysis_RatingWall",
  DMIntl_OffshoreBond_BondIssues = "DMIntl_OffshoreBond_BondIssues",
  DMIntl_OffshoreBond_Spread = "DMIntl_OffshoreBond_Spread",
  DMIntl_OnshoreBond_CityInvestment = "DMIntl_OnshoreBond_CityInvestment",
  DMIntl_OnshoreBond_BondIssues = "DMIntl_OnshoreBond_BondIssues",
  //#endregion

  //#region demo
  Demo_Redux = "Demo_Redux"
  //#endregion
}
