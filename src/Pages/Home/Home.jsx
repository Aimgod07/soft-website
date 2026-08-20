import Navbar from "../../Components/Navbar/Navbar.jsx"
import SearchBar from '../../Components/Navbar/Searchbar.jsx'
import Hero from "../../Components/MainHero/MainHero.jsx"
import PromoBanner from '../../Components/PromoBanner/Promobanner.jsx'
import CategorySection from "../../Components/CategorySection/CategorySection.jsx"
import ClothingCarousel from "../../Components/ClothingCarousel/ClothingCarousel.jsx"
import ProductGrid from "../../Components/ProductGrid/ProductGrid.jsx"
import SpecialBanner from "../../Components/SpecialBanner/SpecialBanner.jsx"
import BrandFooter from "../../Components/Footer/Footer.jsx"
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