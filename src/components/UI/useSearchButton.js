import {useCallback, useState} from "react";

const useSearchButton = (callback, depsArg) => {
    const [searchRequest, setSearchRequest] = useState({})
    const onClick = useCallback(callback, depsArg)
    return {
        searchButton: {
            onClick
        }
    }
}
export default useSearchButton;