import React from 'react'
import { Helmet } from "react-helmet";
import Footer from './footer';
import Header from './header';

const Layout = ({
  children,
  title
}) => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100 bg-black'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout