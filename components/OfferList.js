import Link from 'next/link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'

const OFFERS_PER_PAGE = 10

const Index = ({
  data: { loading, error, feed }
}) => {
  if (feed && feed.length) {
    return (
      <ul>
        {feed.map((offer) => (
          <li key={offer.id}>
            <Link as={`/p/${offer.id}`} href={`/offer?id=${offer.id}`}>
              <a>{offer.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  return (<div>Loading</div>)
}

const feed = gql`
  query feed {
    feed {
      id
      title
    }
  }
`;

export const allOffersQueryVars = {
    skip: 0,
    first: OFFERS_PER_PAGE
}

export default graphql(feed)(Index)
