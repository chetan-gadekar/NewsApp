import React, { useEffect } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const News=(props)=>{


  const[articles,setArticles] =useState([])
  const[loading,setLoading] =useState(false)
  const[page,setPage] =useState(1)
  const[totalResults,setTotalResults] =useState(0)

  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  // constructor(props) {
  //   super(props);
   
  // }

  const updateNews= async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    setPage(page+1)
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)} -"NewsMonkey"`;
     updateNews();
     // eslint-disable-next-line
  },[])

   const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults,)
  };
    return (
      <>
        <h1 className="text-center my-8" style={{marginTop:'70px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Hedlines</h1>
        {loading && <Spiner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spiner/>}
        >
          <div className="container">
          <div className="row">
          {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  image_Url={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>
        </div>
        </InfiniteScroll>
        </>
    );
  }



News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;