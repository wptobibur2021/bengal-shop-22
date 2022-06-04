import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/custom.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from '../hooks/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: '#27AE60',
                color: 'white'
              },
            },
            error: {
              style: {
                background: 'red',
                color: 'white',
                position: 'right'
              },
            },
          }}
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
