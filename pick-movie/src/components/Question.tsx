import axios from 'axios'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/question.css'
import Header from './Header';
import { Footer } from './Footer';
import { Description } from './Description';
import { addToChoosenMovie } from '../dux/QuestionSlice';


export const Question = () => {
    const [option, setOption] = useState('')
    let random = Math.floor(Math.random() * 9);
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (option !== '') {
            axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=ac4ecdb3&s=${option}`).then((response: any) => {
                setMovies(response.data.Search)
                console.log(random);


            })
        }
    }, [option])
    const handleoption = (e:any) => {
        console.log(e.target.value);
        setOption(e.target.value);


    }

    const handleWatchNow = () => {

        const singleMovie = movies[random]


        if (singleMovie != undefined) {

            dispatch(addToChoosenMovie(singleMovie))
            navigate('/pickedMovie')

        }
    }

    return (
            <>
            <Header/>
            <div className='question'>
            <h1 className='question--desc'>Select the genre I will give you  the best movie in it !</h1>
            <div className='d-flex'>
                <ul className='genre-list' >
                    <li > <input type='checkbox' value="drama" onClick={handleoption} /> Drama</li>
                    <li > <input type='checkbox' value="animation" onClick={handleoption} />Annimation </li>
                    <li> <input type='checkbox' value="comedy" onClick={handleoption} /> Comedy Movies</li>
                    <li> <input type='checkbox' value="mystery" onClick={handleoption} />Mystery</li>

                </ul>

            </div>
            <div className='start-button'>

                <button onClick={handleWatchNow}>Watch Now</button>

            </div>
        </div>
        <Description/>
        <Footer/>
            </>
    )
}
