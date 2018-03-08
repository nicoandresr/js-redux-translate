// Selector
export const translateSelector = (state, locales) => {
  const { translate: { language } } = state;
  return locales[language];
}

// Actions
export const SET_LANGUAGE = '@@js-redux-translate/SET_LANGUAGE';

// Actions creators
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: { language }
});

// Initial State
const initialState = language => ({
  language
});

// Reducer
const init = (language = 'en') => {
  return function reducer(state = initialState(language), action = {}) {
    const { type, payload } = action;
    switch (type) {
    case SET_LANGUAGE:
      return { ...state, ...payload };
    default:
      return { ...state };
    }
  };
}

export default init;

