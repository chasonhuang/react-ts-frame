/**
 * action type
 */
export enum ActionType {
  //#region app
  App_ResetState = "App_ResetState",
  App_UpdateState = "App_UpdateState",
  //#endregion

  //#region DmIntl
  DmIntl_ResetState = "DmIntl_ResetState",
  DmIntl_UpdateState = "DmIntl_UpdateState",
  DmIntl_OpenTab = "DmIntl_OpenTab",
  DmIntl_UpdateTab = "DmIntl_UpdateTab",
  DmIntl_CloseTab = "DmIntl_CloseTab",
  DmIntl_Detail_ResetState = "DmIntl_Detail_ResetState",
  DmIntl_Detail_UpdateState = "DmIntl_Detail_UpdateState",
  DmIntl_Detail_AddDetail = "DmIntl_Detail_AddDetail",
  DmIntl_OffshoreBond_Spread_ResetState = "DmIntl_OffshoreBond_Spread_ResetState",
  DmIntl_OffshoreBond_Spread_UpdateState = "DmIntl_OffshoreBond_Spread_UpdateState",
  DmIntl_OffshoreBond_Spread_ResetSpreadFilter = "DmIntl_OffshoreBond_Spread_ResetSpreadFilter",
  DmIntl_OffshoreBond_Spread_UpdateSpreadFilter = "DmIntl_OffshoreBond_Spread_UpdateSpreadFilter",
  DmIntl_OffshoreBond_NewIssues_ResetState = "DmIntl_OffshoreBond_NewIssues_ResetState",
  DmIntl_OffshoreBond_NewIssues_UpdateState = "DmIntl_OffshoreBond_NewIssues_UpdateState",
  DmIntl_OffshoreBond_NewIssues_ResetHistoricalIssuesFilter = "DmIntl_OffshoreBond_NewIssues_ResetHistoricalIssuesFilter",
  DmIntl_OffshoreBond_NewIssues_UpdateHistoricalIssuesFilter = "DmIntl_OffshoreBond_NewIssues_UpdateHistoricalIssuesFilter",
  DmIntl_OffshoreBond_NewIssues_ResetUnannouncedBondFilter = "DmIntl_OffshoreBond_NewIssues_ResetUnannouncedBondFilter",
  DmIntl_OffshoreBond_NewIssues_UpdateUnannouncedBondFilter = "DmIntl_OffshoreBond_NewIssues_UpdateUnannouncedBondFilter",
  //#endregion

  //#region demo
  Demo_Dedux_ResetState = "Demo_Dedux_ResetState",
  Demo_Dedux_AddCount = "Demo_Dedux_AddCount"
  //#endregion
}
