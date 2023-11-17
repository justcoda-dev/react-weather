import {useCallback, useState} from "react";

const useSearchInput = (initialValue, callback) => {
    const [value, setValue] = useState(initialValue)
    const onChange = useCallback(({target: {value}}) => {
        setValue(value)

        if (callback) {
            callback()
        }
    }, [callback])

    return {
        inputSearch: {
            value,
            onChange
        },
        setValue
    }
}
export default useSearchInput;