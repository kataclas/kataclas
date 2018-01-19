import Layout from '../components/MainLayout'

const Content = (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>price $ 100.</p>
    </div>
)

export default (props) => (
    <Layout>
        <Content url={props.url}/>
    </Layout>
)