import css from "./inputWithList.module.css"
import SearchButton from "../UI/SearchButton";
import SearchInput from "../UI/SearchInput";
import SearchList from "../SearchList/SearchList";


const InputWithList = ({inputCb, searchButtonCb, listItemCb, searchCities, showList}) => {

    return (
        <div className={css.inputWithList}>
            <SearchInput onInputCb={inputCb}>
                <SearchButton onClickCb={searchButtonCb}>search</SearchButton>
            </SearchInput>
            {
                showList &&
                <SearchList
                propStyle={css.list}
                list={searchCities}
                clickCb={listItemCb}
            />
            }
        </div>
    )
}
export default InputWithList;