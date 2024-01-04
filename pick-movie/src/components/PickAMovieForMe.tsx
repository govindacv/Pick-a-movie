 
import { useEffect } from "react"
import { Description } from "./Description"
import { Footer } from "./Footer"
import Header from "./Header"
import { Main } from "./Main"
import { useNavigate } from "react-router-dom"

const PickAMovieForMe=()=>{
   const navigate=useNavigate()
    useEffect(()=>{
        
        if(!localStorage.getItem("token"))
        {
            navigate("/login");
        }
      })

    
    return(
        <>
        <Header/>
        <Main/>
        <Description/>
        <Footer/>
        </>
    )
}

export default PickAMovieForMe