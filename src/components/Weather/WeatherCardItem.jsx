import css from "./weatherCards.module.css"

const WeatherCardItem = ({card}) => {
    return (
        <div className={css.card}>
            <div>Date: {card.date}</div>
            <div>Max t°: {`${card.day.maxtemp_c} c°`}</div>
            <div>Min t°: {`${card.day.mintemp_c} c°`}</div>
            <div>Rain chance: {`${card.day.daily_chance_of_rain}%`}</div>
            <div>Max wind: {`${card.day.maxwind_kph}km/h`}</div>
            <div>{card.day.condition.text}</div>
            <img src={card.day.condition.icon} alt=""/>
        </div>
    )
}
export default WeatherCardItem;