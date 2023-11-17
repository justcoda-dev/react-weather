import css from "./weatherMain.module.css"

const WeatherMain = ({currentCity}) => {
    return (
        <div className={css.main}>
            <div className={css.temperature}>{`${currentCity.current["temp_c"]}°`}</div>
            <div className={css.cityAndTime}>
                <div className={css.city}>{currentCity.location.name}</div>
                <div className={css.time}>{currentCity.location.localtime}</div>
            </div>
            <img className={css.image} src={currentCity.current.condition.icon} alt=""/>
        </div>
    )
}
export default WeatherMain;