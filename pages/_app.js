import { storeWrapper } from '../store';
import Layout from '../layout/Layout';
import '../styles/index.scss';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default storeWrapper.withRedux(MyApp);
