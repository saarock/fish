import Hero from '../../components/hero/Hero'
import WhyUs from '../../components/whyUs/WhyUs'
import CompanyHead from '../../components/companyHead/CompanyHead'
import { OurGallary } from '../../components'



const Home = () => {
  return (
    <>
      {<Hero/>}
      <WhyUs/>
      <CompanyHead/>
      <OurGallary/>
      </>
  )
}

export default Home