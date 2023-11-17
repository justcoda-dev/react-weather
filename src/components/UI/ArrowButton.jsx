const arrowButtonStyle = {
    fontsize: "30px",
    fontWeight: "bold",
    color: "#333333"
}

const ArrowButton = ({right, arrowButtonCb}) => {
    return (
        <>
            {
                right
                    ?
                    <button onClick={arrowButtonCb} style={arrowButtonStyle}>{">"}</button>
                    :
                    <button onClick={arrowButtonCb} style={arrowButtonStyle}>{"<"}</button>
            }
        </>
    )
}
export default ArrowButton;