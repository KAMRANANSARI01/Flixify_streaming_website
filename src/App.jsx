import { useEffect } from 'react'
import { fetchDatafromApi } from './utility/api'
// import './App.css'
// for using redux store
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
//for componets and pages
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Error from './pages/404/Error'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'

// for routing
import { Routes,Route } from 'react-router-dom'

function App() {







  const {url}= useSelector((state)=>state.home)
  console.log(url)
  const dispatch = useDispatch()
  

  const fetchApiConfig = () =>{
     fetchDatafromApi("/configuration")
      .then((res)=>{
        console.log(res);
        const url ={
          backdrop : res.images.base_url + "original",
          poster : res.images.base_url + "original",
          profile : res.images.base_url + "original"
        }
        dispatch(getApiConfiguration(url))
      });
  }


useEffect(()=>{
  fetchApiConfig()
},[])

  return (
    <>
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore/:mediaType' element={<Explore/>} />
          <Route path='/search/:query' element={<SearchResult/>}/>
          <Route path='/:mediaType/:id' element={<Details/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
