const WeatherListItem = ({item}) => {
    const [key, value] = Object.entries(item)
    return (
        <tr>
            <td>{key}</td>
            <td>{value}</td>
        </tr>
    )
}
export default WeatherListItem;