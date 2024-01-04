import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelectedMove, getSearchedGener } from '../dux/GenerSlice'
import { Link } from 'react-router-dom'
import '../styles/SearchedGener.css'
import { sg } from './DropdownMenuTopGener'

export const SearchedGener = () => {
    const seg = sg.toUpperCase()
    const searchedGeners = useSelector(getSearchedGener)
    console.log(searchedGeners);
    const dispatch=useDispatch()
    const handleOnClickGener = (val:any) => {
                dispatch(addToSelectedMove(val))
    }
    return (
        <>
            <Header />
            <div className='searchedGener'>
                <div className="searchDetails">
                    <h1>{`THE BEST ${seg} MOVIES`}</h1>
                    <h2>Can’t decide? Use the <Link to={'/'}>Movie Picker!</Link></h2>
                </div>
                <div className='items'>
                    {
                        searchedGeners.map((val: any) => (
                            <div className='singlemovie'>
                                <div className='movieposter'>
                                    <Link to={`/gener/${sg}/${val.title}`} state={val}>
                                        <img src={val.posterURL} alt="" height={250} width={200} onClick={() => { handleOnClickGener(val) }} />
                                    </Link>
                                </div>
                                <div className='movieCon'>
                                    <Link to={'/'}><h4 className='singlemoviename'>{val.title}</h4></Link>

                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>


        </>
    )
}
