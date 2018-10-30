import React from 'react'
import Banner from '../components/banner.js'
import Introduction from '../components/introduction.js'
import Plan from '../components/plan.js'
import HowItWorks from '../components/work.js'
import Team from '../components/team.js'
import Layout from '../components/layout'

export default function IndexPage() {
  return ( 
    <Layout>

      <Introduction />

      <Banner />

      <Plan />

      <HowItWorks />

      <Team />

    </Layout>
  )
}