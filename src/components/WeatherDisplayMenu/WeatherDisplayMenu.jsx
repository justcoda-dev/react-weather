import css from "../Weather/weather.module.css";
import InputWithList from "../InputWithList/InputWithList";
import WeatherTableDetails from "../Weather/WeatherTableDetails";
import WeatherCards from "../Weather/WeatherCards";

const WeatherDisplayMenu = ({listItemCb,
                                searchCities,
                                forecastDays,
                                currentCity,
                                searchButtonCb,
                                inputCb,
                                showList
                            }) => {
    return (<div className={css.list}>
        <InputWithList
            searchButtonCb={searchButtonCb}
            inputCb={inputCb}
            listItemCb={listItemCb}
            searchCities={searchCities}
            showList={showList}
        />
        <WeatherTableDetails currentCity={currentCity} propStyle={css.tableStyle}/>
        <WeatherCards cards={forecastDays}/>
    </div>)
}
export default WeatherDisplayMenu;