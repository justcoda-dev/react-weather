import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentCity} from "./store/actions/currentCity"
import forecastCityByDays from "./store/reducers/forecastCityByDays";
import {getForecastCityByDays} from "./store/actions/forecastCityByDays";
import MainPage from "./view/MainPage";

function App() {

    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

export default App;
