"use client";

import {  useState } from "react";
import Link from 'next/link'
import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ['latin-ext'],
  weight: '400'
});

const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-sky-700 to-cyan-400 w-full">
      <Link href='/' className='text-2xl font-bold text-center'>
        <img className="w-32 h-32 md:ml-12" src="/images/logo/mainLogo2.png" alt="ZC Logo" />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 m-10"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/top">Top 50</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/browse">Browse</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/random">Random</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/search">Search</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-20">
          <li>
            <Link href="/" className={`p-3 text-white hover:text-blue-200 hover:font-bold hover:text-2xl text-xl mx-6 ${lato.className}`}>
              home
            </Link>
          </li>
          <li>
            <Link href="/top" className={`p-3 text-white hover:text-blue-200 hover:font-bold hover:text-2xl text-xl mx-6 ${lato.className}`}>
              top 50
            </Link>
          </li>
          <li>
            <Link href="/browse" className={`p-3 text-white hover:text-blue-200 hover:font-bold hover:text-2xl text-xl mx-6 ${lato.className}`}>
              browse
            </Link>
          </li>
          <li>
            <Link href="/random" className={`p-3 text-white hover:text-blue-200 hover:font-bold hover:text-2xl text-xl mx-6 ${lato.className}`}>
              random
            </Link>
          </li>
          <li>
            <Link href="/search" className={`p-3 text-white hover:text-blue-200 hover:font-bold hover:text-2xl text-xl mx-6 ${lato.className}`}>
              search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav