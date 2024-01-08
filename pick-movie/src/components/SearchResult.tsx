import { useDispatch, useSelector } from "react-redux";
import Header, { sm } from "./Header";
import {
  addToSelectedFromSearch,
  getResponse,
  getSearchedMovies,
} from "../dux/SearchSlice";
import "../styles/SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const response = useSelector(getResponse);
  const searchedResults = useSelector(getSearchedMovies);
  const foundResults = useSelector(getSearchedMovies).Search;
  const dispatch = useDispatch();
  let a = false;
  if (response === "True") {
    a = true;
  }
  console.log(searchedResults);
  const handleOnClickFullInfo = (val: any) => {
    dispatch(addToSelectedFromSearch(val));
  };
  return (
    <>
      <Header />
      {a && (
        <>
          <div className="searchDetails">
            <h1>{searchedResults.totalResults} Search Result Found</h1>
            <p>You searched for : "{sm}"</p>
          </div>
          <div className="result">
            {foundResults.map((val: any) => (
              <div className="details">
                <div className="Poster">
                  <img src={val.Poster} alt="reload" height={350} width={250} />
                </div>
                <div className="movie">
                  <h3>{val.Title}</h3>

                  <p
                    onClick={() => {
                      handleOnClickFullInfo(val);
                    }}
                  >
                    <Link to={`/searchedmovie/fullInFoOfSelectedFromSearch`}>
                      Continue Reading
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {!a && (
        <>
          <div className="searchDetails">
            <h1>0 Search Result Found</h1>
            <h3>You searched for : "{sm}"</h3>
          </div>
          <div className="errorMessage">
            Sorry, but nothing matched your search terms. Please try again with
            different keywords.
          </div>
        </>
      )}
    </>
  );
};

export default SearchResult;
