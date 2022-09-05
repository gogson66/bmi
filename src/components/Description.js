import './Description.css'
import {useState, useEffect, useCallback} from 'react'

const descriptions = ["Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2. BMIs under 20 and over 25 have been associated with higher all-cause mortality, with the risk increasing with distance from the 20-25 range.", "The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more).", " When used to predict an individual's health, rather than as a statistical measurement for groups, the BMI has limitations that can make it less useful than some of the alternatives, especially when applied to individuals with abdominal obesity, short stature, or unusually high muscle mass." ]

function Title() {

    const [currentDes, setCurrentDes] = useState({des: descriptions[0], index: 0})


    const changeDescription = useCallback( (e) => {
        let target = e ? e.target : undefined
        
        let index;
        if (target) {
            const {id} = target
            
            if (id === 'right') index = currentDes.index
            else if (id === 'left') {
                if (currentDes.index === 0) index = 1
                else index = currentDes.index -2    
            } 
            else index = Number(id) -1
        } else index = currentDes.index
                
        
        if (index === 2) setCurrentDes({des: descriptions[0], index: 0})
        else {
            index++
            setCurrentDes({des: descriptions[index], index})
        } 
    }, [currentDes])

    useEffect(() => {
        const interval = setInterval(() => {
            changeDescription()
            
        }, 10000);
        return () => {
            clearInterval(interval);
        } 
      }, [changeDescription]);



    return (
        <div className="introduction">
            <div className='description' >
            <i className='fas fa-angle-left' id='left' onClick={changeDescription}></i>
            <p className={currentDes.index === 0 ? 'active': undefined}>{currentDes.des}</p>
            <p className={currentDes.index === 1 ? 'active': undefined}>{currentDes.des}</p>
            <p className={currentDes.index === 2 ? 'active': undefined}>{currentDes.des}</p>
            <i className='fas fa-angle-right' id='right' onClick={changeDescription}></i>
            </div>
            <div className='circles'>
            <i id="0" className={currentDes.index === 0 ? 'active fas fa-circle' : 'fas fa-circle' } onClick={changeDescription}></i>
            <i id="1" className={currentDes.index === 1 ? 'active fas fa-circle' : 'fas fa-circle' } onClick={changeDescription}></i>
            <i id="2" className={currentDes.index === 2 ? 'active fas fa-circle' : 'fas fa-circle' } onClick={changeDescription}></i>
            </div>
        </div>
    )
}

export default Title