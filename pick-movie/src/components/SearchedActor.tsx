import { Link } from 'react-router-dom'
import { sg } from './DropDownMenuTopActor'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelectedMovieOfActor, getSearchedActor } from '../dux/ActorSlice'

export const SearchedActor = () => {
    const searchedActor = useSelector(getSearchedActor);
    const dispatch = useDispatch()
    const sea = sg.toUpperCase();
    console.log(searchedActor);
    const handleOnClickActor = (val: any) => {

        console.log('hi');

        dispatch(addToSelectedMovieOfActor(val))
       

    }


    return (
        <>

            <Header />
            <div className='searchedGener'>
                <div className="searchDetails">
                    <h1>{`THE BEST ${sea} MOVIES`}</h1>
                </div>
                <div className='items'>
                    {
                        (searchedActor.map((val: any) => (
                            <div className='singlemovie'>
                                <div className='movieposter'>

                                   <Link to={'/actors/selectedMovie'}> <img src={val.posterUrl} alt="" height={250} width={200} onClick={() => handleOnClickActor(val)} /></Link>

                                </div>
                                <div className='movieCon'>
                                    <Link to={'/'}><h4 className='singlemoviename'>{val.title}</h4></Link>

                                </div>
                            </div>

                        )))
                    }
                </div>

            </div>

        </>
    )
}
