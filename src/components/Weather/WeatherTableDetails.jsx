const WeatherTableDetails = ({currentCity, propStyle}) => {
    return (
        <table className={propStyle && propStyle}>
            <thead>
            <tr>
                <th>Weather Details</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>City</td>
                <td>{currentCity.location.name}</td>
            </tr>
            <tr>
                <td>Wind</td>
                <td>{`${currentCity.current["wind_kph"]} km/h`}</td>
            </tr>
            <tr>
                <td>Temperature</td>
                <td>{`${currentCity.current["temp_c"]} с°`}</td>
            </tr>
            <tr>
                <td>Humidity</td>
                <td>{`${currentCity.current["humidity"]} %`}</td>
            </tr>
            <tr>
                <td>Cloud</td>
                <td>{`${currentCity.current["cloud"]} %`}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default WeatherTableDetails;