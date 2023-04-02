import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
    "https://api-ap-southeast-2.hygraph.com/v2/clfukpdd33m8q01upa9z62of4/master"
  )
  
  const QUERY = gql`
  {
    projects {
      id,
          title,
      slug,
      photo {
        url
      }
      richtext{
        html
      }
      datePublished,
      author {
        id
        name
      },
      hushtags {
        id
        tag
      }
    }
  }`
  
  export async function getStaticProps() {
    const {projects} = await graphcms.request(QUERY);
    return{
      props: {
        projects,
      },
      revalidate: 10,
    }
  }
