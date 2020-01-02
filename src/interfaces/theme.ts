export interface Icons {
  icon_checkbox: {
    default_color: string;
    hover_color: string;
    disable_color: string;
    active_color: string;
  };
  icon_search: {
    default_color: string;
    hover_color: string;
    disable_color: string;
    active_color: string;
  };
  icon_arrowDownFall: {
    default_color: string;
    hover_color: string;
    disable_color: string;
    active_color: string;
  };
  icon_list: {
    default_color: string;
    hover_color: string;
    disable_color: string;
    active_color: string;
  };
  icon_remarkedA: {
    default_color: string;
    hover_color: string;
    disable_color: string;
    active_color: string;
  };
}

export interface Imgs {
  img_revoke: {
    default: string;
  };
  img_checkbox: {
    default_unchecked: string;
    default_indeterminate: string;
    default_checked: string;
    disabled_indeterminate: string;
  };
  img_input_condition: {
    default: string;
    disabled: string;
  };
  img_arrowUpCircle: {
    default: string;
  };
  img_arrowRightCircle: {
    default: string;
  };
  img_arrowDownCircle: {
    default: string;
  };
  img_arrowLeftCircle: {
    default: string;
  };
  img_chart: {
    default: string;
  };
  img_dealType_trd: {
    default: string;
  };
  img_dealType_gvn: {
    default: string;
  };
  img_dealType_tkn: {
    default: string;
  };
  img_addWidgetHint: {
    default: string;
  };
}

export default interface Theme {
  themeName: "black" | "white";
  main: {
    default_color: string;
    default_backgroundColor: string;
  };
  panel: {
    default_backgroundColor: string;
    default_borderColor: string;
    default_title_color: string;
    default_header_backgroundColor: string;
    default_label_color: string;
    default_value_color: string;
  };
  select: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
    default_placeholder_color: string;
    default_indicator_color: string;
    default_menu_backgroundColor: string;
    default_menu_borderColor: string;
    default_menu_boxShadowColor: string;
    default_option_color: string;
    hover_backgroundColor: string;
    hover_borderColor: string;
    hover_indicator_color: string;
    hover_option_backgroundColor: string;
    active_backgroundColor: string;
    active_borderColor: string;
    active_indicator_color: string;
    active_option_color: string;
    active_option_backgroundColor: string;
  };
  select_button: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
  };
  /**
   * button
   * - primary 主要按钮
   * - secondary 次要按钮
   * - text 文字按钮
   */
  button: {
    default_primary_color: string;
    default_primary_backgroundColor: string;
    default_primary_borderColor: string;
    default_danger_color: string;
    default_danger_backgroundColor: string;
    default_danger_borderColor: string;
    default_secondary_color: string;
    default_secondary_backgroundColor: string;
    default_secondary_borderColor: string;
    default_text_color: string;
    default_text_backgroundColor: string;
    default_text_borderColor: string;
    hover_primary_color: string;
    hover_primary_backgroundColor: string;
    hover_primary_borderColor: string;
    hover_danger_color: string;
    hover_danger_backgroundColor: string;
    hover_danger_borderColor: string;
    hover_secondary_color: string;
    hover_secondary_backgroundColor: string;
    hover_secondary_borderColor: string;
    hover_text_color: string;
    hover_text_backgroundColor: string;
    hover_text_borderColor: string;
    active_primary_color: string;
    active_primary_backgroundColor: string;
    active_primary_borderColor: string;
    active_danger_color: string;
    active_danger_backgroundColor: string;
    active_danger_borderColor: string;
    active_secondary_color: string;
    active_secondary_backgroundColor: string;
    active_secondary_borderColor: string;
    active_text_color: string;
    active_text_backgroundColor: string;
    active_text_borderColor: string;
    disabled_primary_color: string;
    disabled_primary_backgroundColor: string;
    disabled_primary_borderColor: string;
    disabled_danger_color: string;
    disabled_danger_backgroundColor: string;
    disabled_danger_borderColor: string;
    disabled_secondary_color: string;
    disabled_secondary_backgroundColor: string;
    disabled_secondary_borderColor: string;
    disabled_text_color: string;
    disabled_text_backgroundColor: string;
    disabled_text_borderColor: string;
  };
  icon_button: {
    default_color: string;
    hover_color: string;
    active_color: string;
    disable_color: string;
  };
  input: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
    default_placeholder_color: string;
    default_label_color: string;
    default_condition_color: string;
    default_condition_backgroundColor: string;
    default_unit_color: string;
    default_icon_color: string;
    hover_color: string;
    hover_backgroundColor: string;
    hover_borderColor: string;
    hover_icon_color: string;
    active_color: string;
    active_backgroundColor: string;
    active_borderColor: string;
    disabled_color: string;
    disabled_backgroundColor: string;
    disabled_borderColor: string;
    disabled_label_color: string;
    disabled_condition_color: string;
    disabled_condition_backgroundColor: string;
  };
  tooltip: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
  };
  radio_button: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
    hover_color: string;
    hover_backgroundColor: string;
    hover_borderColor: string;
    active_color: string;
    active_backgroundColor: string;
    active_borderColor: string;
    disabled_color: string;
    disabled_backgroundColor: string;
    disabled_borderColor: string;
  };
  checkbox: {
    default_color: string;
    default_icon_backgroundColor: string;
    default_icon_borderColor: string;
    hover_color: string;
  };
  checkbox_button: {
    default_color: string;
    default_backgroundColor: string;
    default_borderColor: string;
    hover_color: string;
    hover_backgroundColor: string;
    hover_borderColor: string;
    active_color: string;
    active_backgroundColor: string;
    active_borderColor: string;
    disabled_color: string;
    disabled_backgroundColor: string;
    disabled_borderColor: string;
  };
  checkbox_popover: {
    default_label_color: string;
    default_label_backgroundColor: string;
    default_label_borderColor: string;
    default_tip_color: string;
    default_body_backgroundColor: string;
    default_body_borderColor: string;
    default_body_boxShadowColor: string;
    hover_checkbox_backgroundColor: string;
    hover_checkbox_borderColor: string;
    indeterminate_label_color: string;
    indeterminate_label_backgroundColor: string;
    indeterminate_label_borderColor: string;
    active_label_color: string;
    active_label_backgroundColor: string;
    active_label_borderColor: string;
  };
  popover: {
    default_backgroundColor: string;
    default_boxShadowColor: string;
  };
  table: {
    default_color: string;
    default_backgroundColor: string;
    default_headerRow_color: string;
    default_headerRow_backgroundColor: string;
    default_headerRow_separate_borderColor: string;
    default_bodyRow_backgroundColor: string;
    default_bodyRow_boxShadowColor: string;
    hover_bodyRow_backgroundColor: string;
    active_bodyRow_color: string;
    active_bodyRow_backgroundColor: string;
    highlight_bodyRow_backgroundColor: string;
    flicker1_bodyRow_backgroundColor: string;
    flicker2_bodyRow_backgroundColor: string;
  };
  modal: {
    default_color: string;
    default_backgroundColor: string;
    default_header_color: string;
    default_header_backgroundColor: string;
    default_close_color: string;
    hover_close_color: string;
    focus_close_color: string;
  };
  icons: Icons;
  imgs: Imgs;
}

