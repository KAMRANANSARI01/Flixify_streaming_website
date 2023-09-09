import React from 'react'
import "./style.scss"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
// here we are importing useSelector for getting the backdrop img form store(jo home name se save hai)
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contenWrapper/ContentWrapper'

const HeroBanner = () => {
    const [background,setBackground]=useState("")
    const[query,setQuery] = useState("")
    const navigate = useNavigate()
    
    // here we destructure the backdrop img from sotre using useSelector.
    const {url} = useSelector((state)=>state.home)


    // calling custom hooks and itterates data and loading from custom hooks.
    const {data,loading}=useFetch("/movie/upcoming")
// from movie/upcoming we get 20 data .
    useEffect(()=>{
        // now here we add the url.backdrop which is destructured from the store(inwhich base_url and size include)so here firstly we add url.backdrop in bg
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        console.log(bg)
        setBackground(bg)//so we have to add it after the base_url and url size(it is mentioned in the movie api rule.). so we get the baseurl and size from fetchApiConfig(mentioned in app.jsx).now we have to add it.then after adding url.backdrop from store we got the useable background url.and added into the bgstate.
    },[data])

    const searchQueryHandler =(e)=>{
          if(e.key==="Enter" && query.length>0){
            navigate(`/search/${query}`)
          }
    }
  return (
    <div className='heroBanner'>

        {!loading&&<div className="backdrop-img">
{/* here we are using lazyloading img component */}
         <Img src={background}/>
        </div>}
{/* now here we are adding a div for merging opacity layer to the backdrop img*/}
        <div className="opacity-layer">
            
        </div>
      <ContentWrapper>
        <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">Millons of movies, TV shows and people to discover. Explore now.</span>
            <div className="searchInput">
                <input
                     onKeyUp={searchQueryHandler} 
                     type="text"
                     placeholder='Search for a movie or tv show.....'
                     onChange={(e)=> setQuery(e.target.value)
                     } 
                />
                <button>Search</button>
            </div>
        </div>
      </ContentWrapper>
        
    </div>
  )
}

export default HeroBanner
