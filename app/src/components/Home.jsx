import React from 'react'
import{useNavigate} from "react-router-dom"
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  let handleRedirection=()=>{
    navigate('/blogs');
  }
  return (
    <>
    <div>
    <button className='home-button' onClick={handleRedirection}>Go to Blogs Listing</button>
    </div>
    </>
  )
}
