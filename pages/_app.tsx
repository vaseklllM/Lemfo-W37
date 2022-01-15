import "../styles/globals.css"
import rootReducer from "../store/reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"
import FacebookPixel from "../components/FacebookPixel"

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return (
    <FacebookPixel>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </FacebookPixel>
  )
}

export default MyApp
