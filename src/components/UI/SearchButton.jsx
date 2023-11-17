import css from "./searchButton.module.css"

const SearchButton = ({onClickCb, children}) => {
    return (
        <button className={css.searchButton} onClick={onClickCb}>{children}</button>
    )
}
export default SearchButton;