import Link from 'next/link'
import Layout from '../components/MainLayout.js'

const OfferLink = (props) => (
    <li>
      <Link as={`/o/${props.id}`} href={`/offer?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )

const Index = () => (
    <Layout>
      <h1>Kataclas</h1>
      <OfferLink title="Iphone 7"/>
      <OfferLink title="Bike Speed Specialized"/>
    </Layout>
  )
  
  export default Index