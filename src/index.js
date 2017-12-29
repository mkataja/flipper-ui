import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import counterpart from 'counterpart';

import App from './components/App';

counterpart.registerTranslations('fi', require('./locales/counterpart_fi'));
counterpart.registerTranslations('fi', require('./locales/damals_fi'));
counterpart.setLocale('fi');

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
