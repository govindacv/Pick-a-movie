import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedMovieOfActor } from '../dux/ActorSlice'
import Header from './Header';

export const PickedMovie = () => {
    const movie = useSelector(getSelectedMovieOfActor);
    console.log(movie);

    return (

        <>
        <Header/>
        <div className="fullInFoOfSeledtedFromSearch">
        <h2>Watch This ,its great !</h2>
    <div className="toDisplayTitle">
        <h1>{movie.Title}</h1>
    </div>
    <div className="toDisplayImage">

        <img src={movie.Poster} alt="" />
    </div>
    <div className="watchbutton">

        <button className='trailer'> <i className="fa-solid fa-film"></i> Trailer</button>
        <button className='amazon'><i className="fa-solid fa-circle-play"></i>Watch on Amazon.com</button>
    </div>
</div>
        </>
    )
}
