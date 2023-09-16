import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contenWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
  // now we'll do api call
  const[endpoint,setEndpoint]=useState('movie')
  const {data,loading} = useFetch(`/${endpoint}/top_rated`)
  useEffect(() => {}, []);
  const onTabChange = (tab) => {
    setEndpoint(tab==="")
    setEndpoint(tab==="Movies"?"movie":"tv")
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default TopRated;
