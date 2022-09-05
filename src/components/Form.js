import Input from "./UI/Input"
import Button from "./UI/Button"

import {useState} from 'react'

import './Form.css'

function Form(props) {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [effect, setEffect] = useState(false)

    // Changing weight or height state whenever user type number in input 
    const changeWeightHandler = function(e) {
      setWeight(e.target.value)
    }

    const changeHeightHandler = function(e) {
      setHeight(e.target.value)
    }

    const sendDataHandler = function(e) {
      e.preventDefault()

      const formData = {
        weight,
        // Converting cm in m
        height: height/100
      }

      // Reseting states
      setWeight('')
      setHeight('')
      setTimeout(() => {
        setEffect(false)
      }, 700)


      props.onSendData(formData)
    }

    // This trigger animation effects when form is submited
    const startEffects = function(e) {
      e.preventDefault()


      setEffect(true)
      props.onImageDisapear()

      // Sending data after animation finishes
      setTimeout(() => {
        sendDataHandler(e)
      }, 6000)
    }


    return <form className='form' onSubmit={startEffects}>
      <Input className={effect  && `effect-weight`} value={weight} max="500" placeholder="Weight in kg" onChange={changeWeightHandler}></Input>
      <Button type="submit" className="calculate-button">Get BMI</Button>
      <Input  className={effect && 'effect-height'} value={height} max="300" placeholder="Height in cm" onChange={changeHeightHandler}></Input>
    </form>
}


export default Form