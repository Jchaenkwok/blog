import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Tags, PostWidget } from '../components'
import {getPosts, getRuntimePosts, getRecentPosts} from '../services'
import React, { useState, useEffect } from 'react'

const Home: NextPage = ({posts}) => {
  const [fetchedPosts, setFetchedPosts] = useState([])

  useEffect(() => {
    getRuntimePosts().then((result) => setFetchedPosts(result))
  })

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>James Chaen Kwok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post, index) => ( <PostCard key={index} post={post.node} /> ))} */}
          {fetchedPosts.map((post, index) => ( <PostCard key={index} post={post} /> ))}
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
