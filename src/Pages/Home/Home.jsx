import Navbar from "../../Components/Navbar/Navbar"
import SearchBar from '../../Components/Navbar/Searchbar'
import Hero from "../../Components/MainHero/MainHero"
import PromoBanner from '../../Components/PromoBanner/PromoBanner'
import CategorySection from "../../Components/CategorySection/CategorySection"
import ClothingCarousel from "../../Components/ClothingCarousel/ClothingCarousel"
import ProductGrid from "../../Components/ProductGrid/ProductGrid"
import SpecialBanner from "../../Components/SpecialBanner/SpecialBanner"
import BrandFooter from "../../Components/Footer/Footer"
import './Home.css'


const Home = () => {
  return (
    <div>
    <div className="Header">
      <Navbar/>
      <SearchBar/>
    </div>
    <Hero/>
    <PromoBanner/>
    <CategorySection/>
    <ClothingCarousel/>
    <ProductGrid/>
    <SpecialBanner/>
    <BrandFooter/>

    </div>
  )
}

export default Home