import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import '../scss/main.css'

export default function Layout(props){
  return (
    <>
      <Helmet
        title='Extract Bot'
        meta={[
          { name: 'description', content: 'Bitcoin Miner' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang='en' />
      </Helmet>
      <Header />
      <section>
        { props.children }
      </section>
      <Footer />
    </>
  )
}
