import WeatherCardItem from "./WeatherCardItem";
import css from "./weatherCards.module.css"
import ArrowButton from "../UI/ArrowButton";
import {useDispatch} from "react-redux";
import {add, remove} from "../../store/actions/counter";

const WeatherCards = ({cards}) => {
    const dispatch = useDispatch()
    return (
        <div className={css.wrapper}>
            {/*<ArrowButton arrowButtonCb={() => dispatch(remove())}/>*/}
            {cards.map((card, i) => <WeatherCardItem key={i} card={card}/>)}
            {/*<ArrowButton arrowButtonCb={() => dispatch(add())} right/>*/}
        </div>
    )
}
export default WeatherCards;