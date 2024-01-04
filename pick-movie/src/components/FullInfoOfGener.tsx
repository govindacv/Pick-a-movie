import Header from './Header'
import { useSelector } from 'react-redux'
import { getSelectedMovie } from '../dux/GenerSlice'
import '../styles/FullInfoGener.css'
import { Footer } from './Footer'

export const FullInfoOfGener = () => {
  const movie = useSelector(getSelectedMovie)
  console.log(movie);

  return (
    <>
      <Header />
      <div className='fullInfoOfGener'>
        <div className="movieTitle">
          <h1>{movie.title}</h1>

        </div>
        <div className="moviePoster">
          <img src={movie.posterURL} />
        </div>
        <div className="watchbutton">

          <button className='trailer'> <i className="fa-solid fa-film"></i> Trailer</button>
          <button className='amazon'><i className="fa-solid fa-circle-play"></i>Watch on Amazon.com</button>
        </div>
      </div>

    </>
  )
}
