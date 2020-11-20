import './App.css';
import React, {useState, useEffect} from "react"

function App() {
  const url = "https://api.spotify.com/v1/me/top/artists"
  const bearer = "Bearer " + "BQCgIsMQhLvctvOg8nI5qzSa4WqTBEfst4SrEMTfN-s9rhPyU2a_aWaMg7kXWnjUZhGtaJAnGFnryOrDosWkhAQCXYWed453fth2jQS2bpFGDS3tcEKrJdesMq0_f6J2HTB8mtlsdxDPeRnMKep_4Q"


  const [display, setDisplay] = useState([])

  useEffect(async displayData => {
    const response = await fetch(url, {
      headers: {
        'Authorization': bearer,
    }})
    const data = await response.json()
    console.log(data)

  }, [])
  return (
    <div>

    </div>
  );
}

export default App;
