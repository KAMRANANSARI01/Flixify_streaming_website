import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import ContentWrapper from '../../components/contenWrapper/ContentWrapper'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home
