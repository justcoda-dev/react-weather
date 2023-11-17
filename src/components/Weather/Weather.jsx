import css from "./weather.module.css";
import WeatherMain from "../WeatherMain/WeatherMain";
import WeatherDisplayMenu from "../WeatherDisplayMenu/WeatherDisplayMenu";

const dayBg = {
    morning: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9ybmluZyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    day: "https://sferaglass.com/storage/images/ZCyNe6QvEf.jpeg",
    evening: "https://images8.alphacoders.com/100/1003354.jpg",
    night: "https://www.teahub.io/photos/full/134-1348905_nature-desktop-wallpaper-night.jpg",
}

const background = {
    background: `url(${dayBg.night}) no-repeat center center fixed`,
    backgroundSize: "cover"
}
const Weather = ({
                     searchButtonCb,
                     showList,
                     currentCity,
                     forecastDays,
                     searchCb,
                     searchCities,
                     searchCityItemCb
                 }) => {
    return (
            <div style={background} className={css.background}>
                <div className={css.inner}>
                    <WeatherMain currentCity={currentCity}/>
                    <WeatherDisplayMenu
                        searchButtonCb={searchButtonCb}
                        inputCb={searchCb}
                        listItemCb={searchCityItemCb}
                        searchCities={searchCities}
                        showList={showList}
                        forecastDays={forecastDays}
                        currentCity={currentCity}
                    />
                </div>
            </div>

    )
}
export default Weather;