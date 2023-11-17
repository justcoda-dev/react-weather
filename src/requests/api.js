//CONSTANTS ************************************************
const URL = "https://api.weatherapi.com/v1";
const KEY = "c7689c86d47e4ec18e7124033221003"
const DEFAULT_LANGUAGE = "uk";
const API_METHOD = {
    CURRENT: "current.json",
    FORECAST: "forecast.json",
    AUTOCOMPLETE_OR_SEARCH: "search.json",
    HISTORY: "history.json",
    TIME_ZONE: "timezone.json",
    FUTURE: "future.json",
    SPORTS: "sports.json",
    ASTRONOMY: "astronomy.json",
    IP: "ip.json",
}
// days - only with forecast
// dt - only with forecast and history after 1st Jan, 2010 in yyyy-MM-dd
// hour - only forecast or history 24h *
const QUERY = {
    CITY: (city = "Kiev", bool) => {
        return {q: city, aqi: bool ? "yes" : "no", lang: DEFAULT_LANGUAGE}
    },
    CITY_DAYS: (city = "Kiev", days = 10, bool) => {
        return {q: city, days: days, aqi: bool ? "yes" : "no", lang: DEFAULT_LANGUAGE}
    },
    CITY_DAY_HOUR: (city = "Kiev", dt = "2022-03-12", hour = 6, bool) => {
        return {q: city, dt, hour, aqi: bool ? "yes" : "no", lang: DEFAULT_LANGUAGE}
    },
    CITY_BY_LETTERS: (cityLetters = "Kiev") => {
        return {q: cityLetters}
    },
}

// REQUEST ***********************************************************
const request = async (query, apiMethod = API_METHOD.CURRENT, options) => {
    const response = await fetch(`${URL}/${apiMethod}?key=${KEY}&${query}`, options)
    return response.json()
}
// GET REQUEST *******************************************************
request.get = (query, method) => {
    const params = new URLSearchParams(query)
    return request(params, method, {method: "GET"})
}
// DIFFERENT APIS *****************************************************
request.get.forecast = (query) => request.get(query, API_METHOD.FORECAST)
request.get.current = (query) => request.get(query, API_METHOD.CURRENT)
request.get.history = (query) => request.get(query, API_METHOD.HISTORY)
request.get.sports = (query) => request.get(query, API_METHOD.SPORTS)
request.get.astronomy = (query) => request.get(query, API_METHOD.ASTRONOMY)
request.get.ip = (query) => request.get(query, API_METHOD.IP)
request.get.search = (query) => request.get(query, API_METHOD.AUTOCOMPLETE_OR_SEARCH)
request.get.future = (query) => request.get(query, API_METHOD.FUTURE)
request.get.timezone = (query) => request.get(query, API_METHOD.TIME_ZONE)
// export request functions *********************************************
export const GET = {
    CURRENT: {
        CITY: (city) => request.get.current(QUERY.CITY(city))
    },
    FORECAST: {
        CITY_BY_DAYS: (city, days) => request.get.forecast(QUERY.CITY_DAYS(city, days))
    },
    HISTORY: {
        CITY_DAY_HOUR: (city, day, hour) => request.get.history(QUERY.CITY_DAY_HOUR(city, day, hour))
    },
    TIMEZONE: {},
    SEARCH: {
        CITY_BY_LETTERS: (cityLetters) => request.get.search(QUERY.CITY_BY_LETTERS(cityLetters))
    }
}