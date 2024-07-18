import React, { useEffect,useState  } from 'react'
import NewsItems from './NewsItems'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const Newscomponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFLetter = (str) => {
      return str[0].toUpperCase() + str.slice(1);
  };

  const commUpdateNews = async () => {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      props.setProgress(30);
      try {
          setLoading(true);
          let data = await fetch(url);
          props.setProgress(50);
          let parsedData = await data.json();
          props.setProgress(70);
          if (parsedData.articles) {
              setArticles(parsedData.articles);
              setTotalResults(parsedData.totalResults);
          } else {
              console.error("Invalid API response:", parsedData);
          }
          setLoading(false);
          props.setProgress(100);
      } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
      }
  };

  useEffect(() => {
      document.title = `NewsApp - ${capitalizeFLetter(props.category)}`;
      commUpdateNews();
      //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
      let nextPage = page + 1;
      try {
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
          setPage((prevPage) => prevPage + 1);
          let data = await fetch(url);
          let parsedData = await data.json();
          if (parsedData.articles) {
              setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]); 
              setTotalResults(parsedData.totalResults);
          } else {
              console.error("Invalid API response:", parsedData);
          }
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  return (
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
          <h3 className="text-center" style={{ margin: "40px 0px", marginTop: "80px"}}>
              News App - Top Headlines
          </h3>
          {loading && <Loader />}
          <InfiniteScroll
              dataLength={articles.length}
              next={fetchData}
              hasMore={articles.length !== totalResults}
              loader={<Loader />}
          >
              <div className="container">
                  <div className="row my-4">
                      {articles.map((elem) => (
                          <div className="col-md-4 mb-4rem" key={elem.url}>
                              <NewsItems
                                  title={elem.title || "Title not available"}
                                  description={elem.description}
                                  imageUrl={elem.urlToImage || "https://images.macrumors.com/t/iSUWsNg4NGWKU6zaH6TG1UFd798=/1600x/https://img.youtube.com/vi/4D8Dy0kP-Cg/maxresdefault.jpg"}
                                  newsUrl={elem.url}
                                  author={elem.author}
                                  date={elem.publishedAt}
                                  source={elem.source?.name} 
                                 
                              />
                          </div>
                      ))}
                  </div>
              </div>
          </InfiniteScroll>
      </div>
  );
};

Newscomponent.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general"
};

Newscomponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired
};

export default Newscomponent;
