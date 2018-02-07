import Layout from '../components/MainLayout.js'
import OfferList from '../components/OfferList';
import withData from '../lib/withData';

const OFFERS_PER_PAGE = 10

const Index = () => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <OfferList />
  </Layout>
)

export default withData(() => (
  <Index />
))
