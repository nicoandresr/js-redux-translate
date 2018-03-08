# js-redux-translate
A simple package for manage the locales with redux.
# Using
install from npm
```
nmp -i js-redux-translate
```
Then you can use into a combineReducers from redux:
```js
import translate from 'js-redux-translate';

export default combineReducers({
  -other reducers-,
  translate('es')
});
```
You note that here you can setting the default language, if you not pass this parameter then the default language is 'en'.

After in your containers you can use the translateSelector for get the language
```js
import { translateSelector } from 'js-redux-translate';
import locales from './locales';

const mapStateToProps = (state) => ({
  texts: traslateSelector(state, locales)
});
```
And your locales.js can be defined like:
```js
import en from 'locale.en.json';
import jp from 'locale.jp.json';

export default { en, jp };
```
And your each locale.xx.js can be defined like:
```json
{
  "greeting": "Hello world"
}
```
For change the language you can trigger the action setLanguage
```js
import { setLanguage } from 'js-redux-translate';

...

const mapDispatchToProps = dispatch => bindActionCreators({ setLanguage, -other actions- }, dispatch);
```
The complete component is like:
```js
import React, { Component } form 'react';
import { bindActionCreators } from 'redux';
import { setLanguage } from 'js-redux-translate';

class Container extends Component {
  onSetLanguage = (language) => this.props.setLanguage(language);

  render() {
    return (
      <div>
        <div>texts.greeting</div>
        <button onClick={() => this.onSetLanguage('jp')}>Set JP language</button>
        <button onClick={() => this.onSetLanguage('en')}>Set EN language</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  texts: traslateSelector(state, locales)
});

const mapDispatchToProps = dispatch => bindActionCreators({ setLanguage, -other actions- }, dispatch);

const connectedContainer = connect( mapStateToProps, mapDispatchToProps)(Container);

export default connectedContainer;
```


