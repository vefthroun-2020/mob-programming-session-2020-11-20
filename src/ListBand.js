import React, {useState, useEffect} from "react"

function ListBand(props) {
  const url = "https://api.spotify.com/v1/me/top/artists"
  // ToDo: HIDE THIS
  const bearer = "Bearer BQD2iqKQ50dz7OpZC8Z7rHaD2X47yKY_le82y3G2wAgfSGDsJVHqebOeXybYB354KvuKynYkedmHLn1SRHYY1F9DNT9IRQcW0i-S_lHkk6E2pI6vl3Sw7_xOkso3kHrfBsIMXF7wOXqYu-vbREdVSg"

  const [trackData, setTrackData] = useState([])
  
  // Does the same thing
  // const stateArray = useState([]);
  // const trackData = stateArray[0];
  // const setTrackData = stateArray[1];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        headers: {
          'Authorization': bearer,
      }})
      const data = await response.json()
      console.log(data)
      setTrackData(data.items)
    }   
    fetchData(); 
  }, [])

  return (
    <div>
      { 
        trackData.map(i => <li key={i.id}>{i.name} <img src={i.images[0].url} alt="img text"/></li>)
      }
    </div>
  );
}

export default ListBand;