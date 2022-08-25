import spinnerGIF from "../assets/Spinner.gif"

const Spinner = () => {
    return (
        <>
            <img
                src={spinnerGIF}
                className="d-block m-auto"
                style={{width:'200px'}}/>
        </>
    )
}

export default Spinner