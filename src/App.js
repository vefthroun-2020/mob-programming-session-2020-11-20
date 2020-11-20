import './App.css';
import React, {useState, useEffect} from "react"

function App() {
  const url = "https://api.spotify.com/v1/me/top/artists"
  const bearer = "Bearer " + "BQD2iqKQ50dz7OpZC8Z7rHaD2X47yKY_le82y3G2wAgfSGDsJVHqebOeXybYB354KvuKynYkedmHLn1SRHYY1F9DNT9IRQcW0i-S_lHkk6E2pI6vl3Sw7_xOkso3kHrfBsIMXF7wOXqYu-vbREdVSg"


  const [display, setDisplay] = useState([])

  useEffect(async displayData => {
    const response = await fetch(url, {
      headers: {
        'Authorization': bearer,
    }})
    const data = await response.json()
    console.log(data)
    setDisplay(data.items)
  }, [])


  return (
    <>
      <div>
         { display.map(i => {
            return <li>{i.name}</li>
        })}
      </div>
    </>
  );
}

export default App;
