import '../styles/globals.css' 
import '../components/header/header.css'
import '../components/footer/footer.css'
import '../components/mapBox/customMap.css'
import '../components/mainCards/cards.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import '../components/SearchCard/searchCard.css'
import {Provider} from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }) { 
  return (
    <Provider store={store}>
  <Component {...pageProps} /> 
  </Provider>
  )
} 
 
export default MyApp 
