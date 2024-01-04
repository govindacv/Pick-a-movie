
import { Link, useNavigate } from "react-router-dom";
import '../styles/Header.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToSearchedMovies } from "../dux/SearchSlice";
import { DropdownMenuTopGener } from "./DropdownMenuTopGener";
import { DropDownMenuTopActor } from "./DropDownMenuTopActor";




let sm = ''
export let res:boolean
const Header = () => {
    const [searchedMovie, setSearchedMovie] = useState('')
    const [searchState, setSearchState] = useState(false);
    const searchRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isTopActorDropdownVisible, setTopActorDropdownVisible] = useState(false);
    res=false


    useEffect(() => {
       
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, [searchState]);
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=ac4ecdb3&s=${searchedMovie}`).then((response: any) => {

            if (searchedMovie !== '') {
                dispatch(addToSearchedMovies(response.data))
                navigate(`/searchedMovie/?s=${searchedMovie}`)
            }
            sm = searchedMovie

        })
    }, [searchedMovie])



    const handleSearchClick = () => {
        setSearchState(true);
    };

    const handleOnBlur = () => {
        setSearchState(false);
    };

    const handeKeyDown = (e: { key: string }) => {
        if (e.key === 'Enter') {
           
          const inputValue = searchRef.current?.value;
      
           
          if (inputValue !== undefined) {
            setSearchedMovie(inputValue);
            setSearchState(false);
          }
        }
      };
      

    let timeoutId: number;

    const handleMouseEnter = () => {
        setDropdownVisible(true);
        setTopActorDropdownVisible(false)
        clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {

        timeoutId = setTimeout(() => {
            setDropdownVisible(false);
        }, 500);
    };

    const handleMouseEnterTopActors = () => {
        setTopActorDropdownVisible(true);
        setDropdownVisible(false)
        clearTimeout(timeoutId);
    }

    const handleMouseLeaveTopActors = () => {
        timeoutId = setTimeout(() => {
            setTopActorDropdownVisible(false);
        }, 500);
    }
    const handleOnClickBlog=()=>{
        navigate('/blog')
    }
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    const handleImageClick=()=>{
        res=true
    }
    return (
        <>
            <div className="header">
                <div className="pickAMovie--logo">
                    <Link to={'/'}><img src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png" alt="" onClick={handleImageClick} /></Link>
                </div>
                <div className="pickAMovie--contents">
                    <div className="pickAMovie--moviePicker">
                        <Link to={'/q'}><h6>MOVIE PICKER</h6> <div className="verticleArrow">|</div></Link>
                    </div>


                    <div
                        className="pickAMovie--topgeners"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h6>TOP GENRES</h6> <i className="fa-solid fa-chevron-down"></i>{" "}
                        <div className="verticleArrow">|</div>

                        {isDropdownVisible && <DropdownMenuTopGener />}
                    </div>


                    <div className="pickAMovie--topactors"
                        onMouseEnter={handleMouseEnterTopActors}
                        onMouseLeave={handleMouseLeaveTopActors}>
                        <h6>TOP ACTORS</h6> <i className="fa-solid fa-chevron-down"></i>
                        <div className="verticleArrow">|</div>
                        {isTopActorDropdownVisible && <DropDownMenuTopActor />}
                    </div>
                    <div className="pickAMovie--blog">
                        <h6 onClick={handleOnClickBlog}>BLOG</h6> <div className="verticleArrow">|</div>
                    </div>
                    <div className="pickAMovie--searchLogo">
                        <i className="fa-solid fa-magnifying-glass" onClick={handleSearchClick} ></i>
                    </div>
                    {
                        searchState &&


                        <>
                            <div className="searchBar">
                                <input ref={searchRef} type="text" placeholder="Search" onBlur={handleOnBlur} onKeyDown={handeKeyDown} />
                            </div>
                        </>

                    }
                    <div className="pickAMovie-faceBookLogo">
                        <Link to={'https://www.facebook.com/PickAMovieForMeOfficial'}><i className="fa-brands fa-facebook"></i></Link>
                    </div>
                    <div className="pickAMovie-instagramLogo">
                        <Link to={'https://www.instagram.com/pickamovieforme/'}><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                    <div className="pickAMovie-youtubeLogo">

                        <Link to={'https://www.youtube.com/channel/UCLLe8pZVF_BWnPp4-TPfsTQ/'}><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                    <div className="pickAMovie--logout">
                        <h6 onClick={handleLogout}>Log out</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
export { sm }