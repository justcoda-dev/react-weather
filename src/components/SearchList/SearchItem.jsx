import css from "./searchList.module.css"
import {useRef} from "react";

const SearchItem = ({item, clickCb}) => {
    const {current: value} = useRef(item.name)
    return (
        <li
            onClick={clickCb.onClick.bind(null, value)} className={css.searchItem}>
            {`${item.name}, ${item.country}`}
        </li>
    )
}
export default SearchItem;