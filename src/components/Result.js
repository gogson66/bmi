import Button from './UI/Button'

import './Result.css'

function Result(props) {
    const {bmiIndex, description} = props.bmi

    function goBackHandler() {
        props.onGoBack()
    }

    const classes = `result ${props.className}`

    return <div className={classes}>
        <h3>{bmiIndex}</h3>
        <p>{description}</p>
        <Button onClick={goBackHandler}>Go Back
        </Button>
    </div>
}

export default Result