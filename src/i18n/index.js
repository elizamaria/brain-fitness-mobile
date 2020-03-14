import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const ro = require('./ro');

i18n.fallbacks = true;
i18n.translations = { ro };

const fallback = { languageTag: 'ro', isRTL: false };
const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) || fallback;
i18n.locale = languageTag;


export function translate(key, options?) {
  return key ? i18n.t(key, options) : null;
}

