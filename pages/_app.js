import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/custom.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from '../hooks/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: 'green',
              position: 'right'
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
    </Provider>
  )
}

export default MyApp
