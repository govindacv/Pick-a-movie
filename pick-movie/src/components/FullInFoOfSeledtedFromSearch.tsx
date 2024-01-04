 
import Header from './Header'
import '../styles/fullInFoOfSeledtedFromSearch.css'
import { useSelector } from 'react-redux'
import { getSelectedFromMovie } from '../dux/SearchSlice'

export const FullInFoOfSeledtedFromSearch = () => {
    const movie=useSelector(getSelectedFromMovie)
  return (
    <>
    <Header/>
    <div className="fullInFoOfSeledtedFromSearch">
                <div className="toDisplayTitle">
                    <h1>{movie.Title}</h1>
                </div>
                <div className="toDisplayImage">
                    <img src={movie.Poster} alt=""/>
                </div>
                <div className="watchbutton">

          <button className='trailer'> <i className="fa-solid fa-film"></i> Trailer</button>
          <button className='amazon'><i className="fa-solid fa-circle-play"></i>Watch on Amazon.com</button>
        </div>
    </div>
    </>
  )
}
