import React from 'react'
import {Tags, PostWidget, Loader } from '../components';
import Head from 'next/head'

const about = () => {
    return (
        <>
            <Head>
                <title>About - James Chaen Kwok</title>
            </Head>
            <div className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                            <h1 className='mb-8 text-3xl font-semibold border-b pb-4'>About</h1>
                            <p className='my-4 text-lg leading-7 text-gray-500'>
                                I am a currently a student at Virginia Tech majoring in computer science.
                            </p>
                            <p className='mb-4 text-lg leading-7 text-gray-500'>
                                As a student, I've found it tough to pursue my interests outside of school. However, I felt as if I
                                could have spent more of my free time doing something produtive and learning instead of letting it go to waste.
                                A lot of times, I'd start a project and then lose motivation, leaving it incomplete.
                                This time, I wanted to learn game development, but wanted to hold myself accountable and stay on track
                            </p>

                            <p className='mb-4 text-lg leading-7 text-gray-500'>
                                I decided to create a blog where I can document my progress and share what I learn with others.
                                However, that doesn't mean this blog will be limited to posts relating to game development.
                                There's a lot I want to learn, and by committing to weekly blog posts,
                                I hope to be able to stay on track and share something new that I learned each week.
                            </p>
                            <p className='mb-4 text-lg leading-7 text-gray-500'>
                                The design of this blog is based off JavaScript Mastery's NextJS blog video and Reddit's layout.
                            </p>

                            <p className='mb-4 text-lg leading-7 text-gray-500'>
                                For anyone who happens to find this,
                                feel free to leave a comment on a post or reach out to me directly to talk or give feedback.
                            </p>
                        </div>

                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <PostWidget />
                            <Tags />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about