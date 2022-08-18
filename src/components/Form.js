import React, {useState} from 'react'
import Input from "./UI/Input"
import Button from "./UI/Button"
import './Form.css'

function Form(props) {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [effect, setEffect] = useState(false)

    const changeWeightHandler = function(e) {
      setWeight(e.target.value)
    }

    const changeHeightHandler = function(e) {
      setHeight(e.target.value)
    }

    const submitForm = function(e) {
      e.preventDefault()

      const formData = {
        weight,
        height: height/100
      }

      setWeight('')
      setHeight('')

      props.onSendData(formData)
    }

    const startEffects = function(e) {
      e.preventDefault()
      setEffect(true)

      props.onImageDisapear()
      setTimeout(() => {
        submitForm(e)
      }, 7000)
  

    }


    return <form className="form" onSubmit={startEffects}>
      <Input className={effect && 'effect-weight'} value={weight} max="500" placeholder="Weight in kg" onChange={changeWeightHandler}></Input>
      <Button type="submit" className="calculate-button">{props.text}</Button>
      <Input className={effect && 'effect-height'} value={height} max="300" placeholder="Height in cm" onChange={changeHeightHandler}></Input>
    </form>
}


export default Form