import React from 'react'
import { Tags, PostWidget, Loader } from '../components';
import Head from 'next/head'
import Script from 'next/script';
import Link from 'next/link';
const contact = () => (
    <>
        <Head>
            <title>Contact - James Chaen Kwok</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://kit.fontawesome.com/f3b58f27f7.js" crossorigin="anonymous" />

        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                        <h1 className='mb-8 text-3xl font-semibold border-b pb-4'>Contact</h1>
                        <p className='my-4 text-lg leading-7 text-gray-500'>
                            Feel free to reach out to me with any of the links below:
                        </p>
                        <h3 className='text-xl font-semibold mb-2'>Profiles</h3>
                        <ul className="grid grid-cols-2 list-none ml-4">
                            <li>
                                <i className="fab fa-linkedin before:text-xl before:mr-4" />
                                <Link href='https://www.linkedin.com/in/jchaenkwok/'>
                                    <span>LinkedIn</span>
                                </Link>

                            </li>
                            <li>
                                <i className="fab fa-github before:text-xl before:mr-4" />
                                <Link href='https://github.com/Jchaenkwok'>
                                    <span>GitHub</span>
                                </Link>
                            </li>
                            <li>
                                <i className="fab fa-twitter before:text-xl before:mr-4" />
                                <Link href='https://twitter.com/jchaenkwok  '>
                                    <span>Twitter</span>
                                </Link>
                            </li>
                        </ul>

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

export default contact