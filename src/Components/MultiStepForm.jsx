import React, { useState } from 'react';

const StepOne = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Step One</h2>
            <input
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <button onClick={nextStep} >Next</button>
        </div>
    )
}
const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div>
            <h2>Step Two</h2>
            <input
                type='email'
                placeholder='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button onClick={prevStep} >Back</button>
            <button onClick={nextStep} >Next</button>
        </div>
    )
}

const StepThree = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div>
            <h2>Step Three</h2>
            <input
                type='password'
                placeholder='password'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button onClick={prevStep} >Back</button>
            <button onClick={() => alert(JSON.stringify(formData))} >Submit</button>
        </div>
    )
}


const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const nextStep = () => setStep((prev) => prev + 1)
    const prevStep = () => setStep((prev) => prev - 1)

    return (
        <div>
            {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <StepThree formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        </div>
    )


};

export default MultiStepForm