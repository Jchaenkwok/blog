import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection (orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}

export const getRuntimePosts = async () => {
  const query = gql`
    query MyQuery {
      posts (orderBy: createdAt_DESC) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        tags {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        tags {
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getSimilarPosts = async (tags, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $tags: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {tags_some: {slug_in: $tags}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, tags });

  return result.posts;
}

export const getTags = async () => {
  const query = gql`
    query getTags {
        tags {
          name
          slug
          colorIndex
        }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.tags;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
}

export const getTagPost = async (slug) => {
  const query = gql`
    query GetTagPost($slug: String!) {
      postsConnection(where: {tags_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
}