import { useState } from 'react'
import './App.css';

import { I18Provider, LOCALES } from './i18n';
import { FormattedMessage } from 'react-intl';
import translate from './i18n/translate'

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)
  const langChange = (e) => { 
    let lang = e.target.value
    setLocale(lang)
  }
  return (
    <I18Provider locale={locale}> 
      <div className="App">
        <header className="App-header">
          <h2>This app is also demonstarting CI/CD</h2>
          <h4>
              <select  onChange={langChange}>
                <option value={LOCALES.ENGLISH}>English</option>
                <option value={LOCALES.HINDI}>Hindi</option>
                <option value={LOCALES.FRENCH}>French</option>
                <option value={LOCALES.GERMAN}>Germen</option>
              </select>
          </h4>
          <h2>
            {translate("welcome", {name: 'Prakhar'})}
          </h2>
          <h5> 
            {translate('copyright', {path : <code> &copy; HCL Technologies.</code>})}
            {/* Created and managed by <code> &copy; HCL Technologies.</code> All rights reserved. */}
          </h5>
        </header>
      </div>
    </I18Provider>
  );
}

export default App;
