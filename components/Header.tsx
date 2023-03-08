import React, { useContext } from 'react'
import Link from 'next/link';

const navCategories = [{ name: 'About', slug: 'about' }, { name: 'Contact', slug: 'contact' }]

const Header = (): JSX.Element => {
    return (
        // <div className="container mx-auto px-10 mb-8">
        //     <div className='border-b w-full inline-block border-blue-400 py-8'>
        //         <div className='md:float-left block'>
        //             <Link href='/'>
        //                 <span className='cursor-pointer font-bold text-4xl text-white'>
        //                     James Chaen Kwok
        //                 </span>
        //             </Link>
        //         </div>

        //         <div className='hidden md:contents'>
        //             {navCategories.map((category) => (
        //                 <Link key={category.slug} href={`/category/${category.slug}`}>
        //                     <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
        //                         {category.name}
        //                     </span>

        //                 </Link>
        //             ))}
        //         </div>
        //     </div>
        // </div>

        <div className="container mx-auto text-center px-10 mb-8 border-b w-full border-zinc-600 py-8">
            <div className='pb-8'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        James Chaen Kwok
                    </span>
                </Link>
            </div>
            <div className='hidden md:contents'>
                {navCategories.map((category) => (
                    <Link key={category.slug} href={`/${category.slug}`}>
                        <span className='mt-2 align-middle text-white mx-8 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header