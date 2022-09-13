import './Card.css'
import {useState} from 'react'
import Form from './Form'
import Image from './UI/Image'
import Result from './Result'
import CardFace from './CardFace'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


 
function Card(props) {

    const [imageInvisible, setImageInvisible] = useState(false)
    const [flip, setFlip] = useState(false)
    const [bmi, setBmi] = useState({})
  
    // Computing Body Mass Index with data recieved from submited form
    const computeIndex = function(data) {
      const {weight, height} = data
  
      // Computing bmi index, rounding and returnig back number
      const bmiIndex = +(weight / height**2).toFixed(1)
  
      // Seting description with bmi index
      let description;
      if (bmiIndex < 16) description = 'Underweight (Severe thinness)'
      else if (bmiIndex >= 16 && bmiIndex <= 16.9) description = 'Underweight (Moderate thinness)'
      else if (bmiIndex >= 17 && bmiIndex <= 18.4) description = 'Underweight (Mild thinness)'
      else if (bmiIndex >= 18.5 && bmiIndex <= 24.9) description = 'Normal Range'
      else if (bmiIndex >= 25 && bmiIndex <= 29.9) description = 'Overweight (Pre-obese)'
      else if (bmiIndex >= 30 && bmiIndex <= 34.9) description = 'Obese (Clas I)'
      else if (bmiIndex >= 35 && bmiIndex <= 39.9) description = 'Obese (Clas II)'
      else if (bmiIndex >= 40) description = 'Obese (Clas III)'
      
  
      
      setBmi({
        bmiIndex,
        description
      })
      setFlip(true)
      
      
    }
  
    // Trigger image disappearing effect when input fall on image
    function disappearImage() {    
      
      setImageInvisible(true)
    }
  
    // Seting initial states when user goes back to form
    function goBack() {
      setFlip(false)
      setImageInvisible(false)
    }
  
  
    // Seting multiple classes for image components
    const classesScales = `scales ${imageInvisible && 'image-disappear scales-disappear'}`
    const classesStadiometer = `stadiometer ${imageInvisible && 'image-disappear stadiometer-disappear'}`
  


    const classesFront = `card-front ${flip && 'card-front-flipped'}`
    const classesBack = `card-back ${flip && 'card-back-flipped'}`

    return <div className='card-container'>
    <div className='icon-container'>
      <FontAwesomeIcon icon={faArrowDown} className="fa fa-arrow-down"></FontAwesomeIcon>
    </div>
    <div className="card">
        <div className="flip">
            <CardFace className={classesFront}>
                <Form  onSendData={computeIndex} onImageDisapear={disappearImage}></Form>
                    <div className="images">
                        <Image className={classesScales} src='images/scales.png' alt='scales'></Image>
                        <Image className={classesStadiometer} src='images/stadiometer.png' alt='stadiometer'></Image>
                    </div> 
            </CardFace>
            <CardFace className={classesBack}>
                <Result onGoBack={goBack} className={flip && 'appear'} bmi={bmi}></Result>
            </CardFace>
        </div>
    </div> 
    </div>  
}

export default Card


