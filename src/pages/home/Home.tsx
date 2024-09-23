import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutUs from '../aboutUs/AboutUs'
import WhyUs from '../../components/whyUs/WhyUs'
import CompanyHead from '../../components/companyHead/CompanyHead'
import { PositiveMessage } from '../../components'

const Home = () => {
  return (
    <div>
      {<Hero/>}
      <WhyUs/>
      <CompanyHead/>

      </div>
  )
}

export default Home