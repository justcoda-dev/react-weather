import Header from "../components/Header/Header";
import Loading from "../components/Loading/Loading";
import {useCallback, useEffect, useMemo} from "react";
import Weather from "../components/Weather/Weather";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCity} from "../store/actions/currentCity";
import {getForecastCityByDays} from "../store/actions/forecastCityByDays";
import debounce from "../functions/debounce";
import {getSearchedCities} from "../store/actions/searchCities";
import useSearchInput from "../components/UI/useSearchInput";
import useSearchList from "../components/SearchList/useSearchList";
//style constants *******************************************
const loadingWrapper = {
    display: "flex",
    justifyContent: "center",
    margin: "10% 0"
};
// constants *************************************************
const DEBOUNCE_WAIT = 2000;
const DAYS_IN_CARDS_LIST = 4;
const DEFAULT_CITY = "Vinkivtsi"

const MainPage = () => {

    const {inputSearch, setValue} = useSearchInput("");
    const {value: inputSearchValue} = inputSearch;
    const {searchList, showList, setShowList} = useSearchList("");


    const dispatch = useDispatch()
    const searchCities = useSelector(({searchCities}) => searchCities)
    const currentCity = useSelector(({currentCity}) => currentCity)
    const forecastCityByDays = useSelector(({forecastCityByDays}) => forecastCityByDays)

    const forecastDaysMemo = useMemo(() => {
        return Object.keys(forecastCityByDays).length && forecastCityByDays.forecast.forecastday
    }, [forecastCityByDays])

    const currentCityMemo = useMemo(() => {
        return Object.keys(currentCity).length && currentCity
    }, [currentCity])

    const searchCitiesMemo = useMemo(() => {
        return searchCities.length && searchCities
    }, [searchCities])


    const searchButton = useCallback(() => {
        if (searchList.value) {
            dispatch(getCurrentCity(inputSearchValue))
            dispatch(getForecastCityByDays(inputSearchValue, DAYS_IN_CARDS_LIST))
        }
    }, [searchList.value])

    useEffect(() => {
        if (inputSearchValue.length >= 1 && inputSearchValue !== searchList.value) {
            dispatch(getSearchedCities(inputSearchValue))
            setShowList(true)
        } else {
            setShowList(false)
        }
    }, [inputSearchValue])
    useEffect(() => {
        setValue(searchList.value)
        setShowList(false)

    }, [searchList.value])

    useEffect(() => {
        dispatch(getCurrentCity(DEFAULT_CITY))
        dispatch(getForecastCityByDays(DEFAULT_CITY, DAYS_IN_CARDS_LIST))
        return () => {
        }
    }, [])

    return (
        <div>
            <Header/>
            {currentCityMemo && forecastDaysMemo ?

                <Weather
                    searchButtonCb={searchButton}
                    searchCityItemCb={searchList}
                    searchCb={inputSearch}
                    forecastDays={forecastDaysMemo}
                    currentCity={currentCityMemo}
                    searchCities={searchCitiesMemo}
                    showList={showList}
                />
                :
                <Loading/>
            }
        </div>
    )
}
export default MainPage;