import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from './store/store';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);

var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var ipwhois = JSON.parse(this.responseText);
		localStorage.setItem('lat', ipwhois.latitude)
		localStorage.setItem('lon', ipwhois.longitude)
		localStorage.setItem('name', ipwhois.city)
		localStorage.setItem('country', ipwhois.country_code)
	}
};
XMLHttp.open('GET', 'https://ipwho.is/', true);
XMLHttp.send();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


