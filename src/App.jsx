import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import MainPage from '../src/pages/MainPage';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';

function App() {
    const [step, setStep] = useState(0);
    const addStep = () => {
        setStep(step + 1);
    };
    return (
        <div className="App">
            {step === 0 && (
                <div className="h-screen w-screen flex-center-col bg1">
                    <MainPage addStep={addStep} />
                </div>
            )}
            {step > 0 && (
                <div className="h-screen w-screen flex-center-col bg2">
                    <div className="w-full flex justify-between items-center p-[38px]">
                        <div />
                        {step === 1 && <Step1 addStep={addStep} />}
                        {step === 2 && <Step2 addStep={addStep} />}
                        {step === 3 && <Step3 addStep={addStep} />}
                        <ProgressBar step={step} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
