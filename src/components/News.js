import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  document.title=`${this.capitalizeFirstLetter(this.props.category)} -"NewsMonkey"`;
  }

  async updateNews() {
    console.log("Cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3faf3ee5333e4417b7295bcb357da07b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlenextclick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlepreclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = () => {
    this.setState({page:this.state.page+1})
    this.updateNews();
  };

  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Hedlines</h1>
        {/* {this.state.loading && <Spiner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles!==this.state.totalResults}
          loader={<Spiner/>}
        ></InfiniteScroll>
        <div className="row">
          {this.state.articles.map((element) => (
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
    );
  }
}

export default News;
