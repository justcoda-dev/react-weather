import WeatherListItem from "./WeatherListItem";

const WeatherListInfo = ({items}) => {
    return (
        <table>
            {items.map(item => <WeatherListItem item={item}/>)}
        </table>
    )
}
export default WeatherListInfo;