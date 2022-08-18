import Button from './UI/Button'
import Card from './UI/Card'
import {useState}  from 'react'
import './Result.css'

function Result(props) {
    const {bmiIndex, description} = props.bmi

    const [side, setSide] = useState('back')

    const goBackHandler = () => {
        setSide('front')
        
        setTimeout(() => {
            props.onAnimationFinished()
        }, 1000)
        
    }


    const classes = `result ${side === 'front' ? 'flip-back' : `${props.flip}`}`
    return <Card className={classes}>
        <h1>{bmiIndex}</h1>
        <p>{description}</p>
        <Button onClick={goBackHandler}>Go Back
        </Button>
    </Card>
}

export default Result