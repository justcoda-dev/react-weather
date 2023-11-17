import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    minWidth:"100px",
    minHeight:"100px",
}

const Loading = () => {
    return (
        <div style={LoadingWrapper}>
            <CircularProgress/>
        </div>
    );
}
export default Loading;