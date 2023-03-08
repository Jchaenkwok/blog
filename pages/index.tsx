import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Tags, PostWidget } from '../components'
import {getPosts} from '../services'

const Home: NextPage = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>James Chaen Kwok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => ( <PostCard key={post.title} post={post.node} /> ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
              <PostWidget />
              <Tags />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}

export default Home
