import '../styles/globals.css' 
import '../components/header/header.css'
import '../components/footer/footer.css'
import '../components/mapBox/customMap.css'
import '../components/mainCards/cards.css'
import 'mapbox-gl/dist/mapbox-gl.css';
 
function MyApp({ Component, pageProps }) { 
  return <Component {...pageProps} /> 
} 
 
export default MyApp 
