import Hero from '../../components/hero/Hero'
import WhyUs from '../../components/whyUs/WhyUs'
import CompanyHead from '../../components/companyHead/CompanyHead'



const Home = () => {
  return (
    <div>
      {<Hero/>}
      <WhyUs/>
      {/* <FishDetails/> */}
      <CompanyHead/>
      {/* <OurGallary/> */}
      </div>
  )
}

export default Home