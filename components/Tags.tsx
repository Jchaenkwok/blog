import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTags } from '../services'

const tagColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-gray-500',
]

const Tags = () => {
    const [tags, setTags] = useState([])


    useEffect(() => {
        getTags().then((result) => setTags(result))
    }, [])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-4 font-semibold border-b pb-4'> Tags </h3>

            {tags.map((tag) => {
                const colorIndex = tag.colorIndex % tagColors.length
                const tagColor = tagColors[colorIndex]
                return (
                    <Link key={tag.slug} href={`/tag/${tag.slug}`}>
                        <span className={`inline-block mr-2 mb-4 px-3 py-1 text-white font-semibold rounded-full ${tagColor} cursor-pointer`}>{tag.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export default Tags