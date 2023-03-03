import { useState } from 'react'
import './BMI.css'
const BMIcal = () => {

    const [weight , setWeight] = useState(0)

  return (
    <>
        <div className="header">
            <h2>BMI Calculator using UseState Hook</h2>
        </div>
        <div className="values">
            <div>
                <div>
                    <input type="text" placeholder='Give Your Weight in KG' id='weight'/>
                </div>
                <div>
                    <input type="text" placeholder='Give Your Height in m' id='height' />
                </div>
            </div>
        </div>
        <div className="btn">
            <button>Calculate</button>
        </div>
        <div className="answer">
            <h3>Calculated Body Mass is <span>{}</span> </h3>
        </div>
    </>
  )
}

export default BMIcal

// weight / height