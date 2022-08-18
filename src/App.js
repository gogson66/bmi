import './App.css';
import Title from './components/Title'
import Form from './components/Form';
import Image from './components/UI/Image';
import Sidebar from './components/Sidebar';
import Result from './components/Result';
import Card from './components/UI/Card';
import React, {useState} from 'react'

function App() {

  const [isResult, setIsResult] = useState(false)
  const [imageInvisible, setImageInvisible] = useState(false)
  const [endStatus, setEndStatus] = useState(false)
  const [bmi, setBmi] = useState({})

  const addDataHandler = function(data) {
    const {weight, height} = data
    const bmiIndex = +(weight / height**2).toFixed(1)
    let description;

    console.log(bmiIndex);
    

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
    setIsResult(true)
    
    
  }

  function disappearImage() {
    
    setImageInvisible(true)
  }

  function endAnimationHandler() {
    setEndStatus(true)
    setImageInvisible(false)
    setIsResult(false)

    setTimeout(() => {
      setEndStatus(false)
    }, 2000)
    
  }

  const classesScales = `scales ${imageInvisible && 'image-disappear scales-disappear'}`
  const classesStadiometer = `stadiometer ${imageInvisible && 'image-disappear stadiometer-disappear'}`
  const classesCard = `${imageInvisible && 'set-index flip-card'} ${endStatus && 'flip-home'}`
  console.log(classesCard);
  

  return (
    <div className="main" >
      <Sidebar>The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more).</Sidebar>
      <div className="center">
      <Title></Title>
      { !isResult && <Card className={classesCard}>
       <Form onSendData={addDataHandler} onImageDisapear={disappearImage} text="Get BMI"></Form>
      <div className="images">
      <Image className={classesScales} src='images/scales.png' alt='scales'></Image>
      <Image className={classesStadiometer} src='images/stadiometer.png' alt='stadiometer'></Image>
      </div> 
      </Card> }
      {isResult && <Result onAnimationFinished={endAnimationHandler} flip="flip-result" bmi={bmi}></Result>}
      </div> 
      <Sidebar>
      When used to predict an individual's health, rather than as a statistical measurement for groups, the BMI has limitations that can make it less useful than some of the alternatives, especially when applied to individuals with abdominal obesity, short stature, or unusually high muscle mass.
      </Sidebar>
    </div>

  );
}

export default App;
