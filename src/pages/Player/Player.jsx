import React, { useEffect, useState } from 'react'
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
const Player = () => {

  const navigate =useNavigate();

  const {id}=useParams();
  const [apiData,setApiData]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjYyNmRhMTg0ODRmNzdlNjNmYmJkZWQ2MWE5NDlmZiIsIm5iZiI6MTcyMDA1OTQ2OS45OTE5NjMsInN1YiI6IjY2N2Y3ZGM4ZmFhMjE3MTkxNGRmZDI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HZtMkjnDCSsMMNusTbT9m6oikk9n19ib2s5VdptnntM'
    }
  };
  
  useEffect(()=>{ fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
 },[])
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='Trailer' frameBorder='0' allowFullScreen> </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player