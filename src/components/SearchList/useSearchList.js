import {useCallback, useState} from "react";

const useSearchList = (initialValue, callback) => {
    const [showList, setShowList] = useState(false)
    const [value, setValue] = useState(initialValue)
    const onClick = useCallback((value) => {
        setValue(value)
        if (callback) {
            callback()
        }
    }, [showList])

    return {
        searchList: {
            onClick,
            value
        },
        showList,
        setShowList
    }
}
export default useSearchList;