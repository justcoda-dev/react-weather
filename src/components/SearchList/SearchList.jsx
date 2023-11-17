import css from "./searchList.module.css";
import SearchItem from "./SearchItem";
import Loading from "../Loading/Loading";

const SearchList = ({list, propStyle, clickCb}) => {
    return (
        <>
            {
                !!list.length ?
                    <ul className={`${css.searchList} ${propStyle}`}>
                        {
                            list.map(item =>
                                <SearchItem
                                    clickCb={clickCb}
                                    key={item.id}
                                    item={item}
                                />)
                        }
                    </ul> : <Loading/>
            }
        </>
    )
}
export default SearchList;