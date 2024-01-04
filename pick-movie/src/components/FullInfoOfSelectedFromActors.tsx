import Header from './Header'
import '../styles/fullInFoOfSeledtedFromSearch.css'
import { useSelector } from 'react-redux'
import { getSelectedMovieOfActor } from '../dux/ActorSlice'

export const FullInfoOfSelectedFromActors = () => {
    const movie = useSelector(getSelectedMovieOfActor)
    console.log(movie.posterUrl);

    return (
        <>
            <Header />
            <div className="fullInFoOfSeledtedFromSearch">
                <div className="toDisplayTitle">
                    <h1>{movie.title}</h1>
                </div>
                <div className="toDisplayImage">

                    <img src={movie.posterUrl} alt="" />
                </div>
                <div className="watchbutton">

                    <button className='trailer'> <i className="fa-solid fa-film"></i> Trailer</button>
                    <button className='amazon'><i className="fa-solid fa-circle-play"></i>Watch on Amazon.com</button>
                </div>
            </div>
        </>
    )
}
