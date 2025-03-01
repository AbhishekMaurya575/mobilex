import React from 'react'
import HeroSection from './Herosection'
import ProductBannerSection from './ProductBannerSection'
import Trending from './Trending'
import BestSellersSection from './BestSellersSection'
import Bestoneforyou from './Bestoneforyou'
import TrustpilotReviewCarousel from './TrustpilotReview'
import Newsletter from './Newsletter'


const Home = () => {
  return (
<>
<HeroSection/>
<ProductBannerSection/>
<Trending/>
<BestSellersSection/>
<Bestoneforyou/>
<TrustpilotReviewCarousel/>
<Newsletter/>

</>
  )
}

export default Home
