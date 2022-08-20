import Button from './UI/Button'

import './Result.css'

function Result(props) {
    const {bmiIndex, description} = props.bmi

    function goBackHandler() {
        props.onGoBack()
    }

    return <div className="result">
        <h1>{bmiIndex}</h1>
        <p>{description}</p>
        <Button onClick={goBackHandler}>Go Back
        </Button>
    </div>
}

export default Result