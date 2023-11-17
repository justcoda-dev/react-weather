import css from "./searchInput.module.css";

const SearchInput = ({onInputCb, propStyle, children}) => {
    return (
        <>{children ?
            <div className={css.wrapper}>
                <input
                    style={propStyle}
                    className={css.searchInput}
                    {...onInputCb}
                    type="text"/>
                {children}
            </div>
            : <input
                style={propStyle}
                className={css.searchInput}
                {...onInputCb}
                type="text"/>}</>
    )
}
export default SearchInput;