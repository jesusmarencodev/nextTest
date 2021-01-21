import { types } from "../../types/types";

export const settingsUpdateLang = (lang) => ({
  type: types.USER_SETTINGS_UPDATE_LANGUAGE,
  payload: lang,
});