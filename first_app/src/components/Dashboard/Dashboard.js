import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';
// import API from '../../services/weaterApi'


import "./Dashboard.css";


const Dashboard = props => {
  const [hintData, setHintData] = useState([]);
  const [submitting, setSubmitting] = useState(false)

  const [state, setState] = useState({
    cityName: "",
    cityID: null,

  })
  const getHintData = async () => {
    const res = await axios.get('https://www.metaweather.com/api/location/search/?query=san')
    var hintArray = []
    res.data.map(a => hintArray.push(a.title))
    setHintData(hintArray)
  }

  useEffect(() => {
    getHintData()
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true)
    console.log('handleSubmit before:', state)
    getCityID();

    // state.cityID=cityID;
    console.log('handleSubmit:', state)
  };

  const handleChange = (event) => {
    let name = event.target.value;

    // setCity(event.target.value)
    setState({ cityName: name })
  }

  const getWeaterIconByDay = (day) => day.icon;


  const getCityID = async () => {
    axios.get(`https://www.metaweather.com/api/location/search/?query=${state.cityName}`)
      .then(res => {
        state.cityID = res.data[0].woeid;

        axios.get(`https://www.metaweather.com/api/location/${state.cityID}`).then(res => {

          const { consolidated_weather } = res.data;
          consolidated_weather.map(c => c.icon = `https://www.metaweather.com/static/img/weather/${c.weather_state_abbr}.svg`);
          state.currentWeater = consolidated_weather.shift()
          state.consolidated_weather = consolidated_weather.splice(0, 3);
          console.log(state);
        })

      })


  };


  const getForcastWeater = (day) => {
    if (submitting && !!state.consolidated_weather && state.consolidated_weather.length > 0) {
      // console.log(state)
      return (

        <div key={day.id} className="day">
          <span className="day-text">date:{day.applicable_date}</span>
     
          <span className="day-text">min temp:{day.min_temp}</span>
         
          <span className="day-text">max temp:{day.max_temp}</span>
          <img className="dayIcon" src={getWeaterIconByDay(day)} alt={day.weather_state_name} />
          <span className="day-text">humidity:{day.humidity}</span>
          <span className="day-text">weather_state_name:{day.weather_state_name}</span>


        </div>


      );
    }
  }



  return (
    <div className="dashboard-container">
      <div className="search-container">
        {!submitting &&
          <div className="hint-search">  <h5>Try typing these words</h5>
            <code>{`[${hintData.toString()}]`}</code></div>
        }

        <form onSubmit={handleSubmit}>
          <Hint options={hintData} allowTabFill>

            <input
              name="cityName"
              type="text"
              className='input-with-hint'

              onChange={handleChange}
            />

          </Hint>
          <button type="submit">submit</button>
        </form>
      </div>

      {submitting&&(
        <div className="results-container">
      <div className="today-container">
        
          {'getCurrentWeater()'}
    
      </div>
      <div className="weekDay-container">
        {!!state.consolidated_weather && state.consolidated_weather.map(day => (
          getForcastWeater(day)))}
      </div>
      </div>
      )}

    </div>
  );
};



export default Dashboard;