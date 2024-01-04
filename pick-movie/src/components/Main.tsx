import { useNavigate } from 'react-router-dom'
import '../styles/Main.css'
export const Main = () => {
 

const navigate=useNavigate()
const handleClick=()=>{
    navigate('/q')
}

    return (
        <>
            {
                  (<div className='mainhome'>
                    <div className='main--heading'>
                        <h1>MOVIE RECOMMENDATION ENGINE</h1>
                    </div>
                    <div className='main--description'>
                        <p>You can’t decide between thousands of movies available for streaming?
                            Answer  6 questions and let us do the work!</p>
                    </div>
                    <div className='start-button'>

                        <button onClick={handleClick}>Start Now</button>

                    </div>
                </div>)

            }

        </>


    )
}
