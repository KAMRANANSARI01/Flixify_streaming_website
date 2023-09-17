import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast';
import "./style.scss"
// import { useSelector } from 'react-redux';
const Details = () => {
  const {mediaType, id} = useParams();
  const {data,loading} =useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditLoading} = useFetch(`/${mediaType}/${id}/credits`);
  // const {url} = useSelector((state)=>state.home)

  
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew = {credits?.crew}/>
      <Cast data={credits?.cast} loading={creditLoading}/>

    </div>
  )
}

export default Details
