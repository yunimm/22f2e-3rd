import { useState } from 'react';
import './App.scss';
import ProgressBar from './components/ProgressBar';
import MainPage from '../src/pages/MainPage';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Step7 from './pages/Step7';
import Step8 from './pages/Step8';

function App() {
    const [step, setStep] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const addStep = () => {
        if (step !== 9) {
            setStep(step + 1);
        } else {
            setStep(0);
        }
    };

    return (
        <div className="App">
            {step === 0 && (
                <div className="h-screen w-screen flex-center-col bg1">
                    <MainPage
                        addStep={addStep}
                        title={'Scrum新手村'}
                        p1={'嗨囉! 歡迎加入Burger資訊。'}
                        p2={
                            '在正式加入專案開發之前，需要請你先了解Scrum的流程與精神。'
                        }
                        p3={'請接受挑戰任務，成功通過Scrum新手村的挑戰任務吧。'}
                        btnText={'接受挑戰'}
                    />
                </div>
            )}
            {step === 9 && (
                <div className="h-screen w-screen flex-center-col bg1">
                    <MainPage
                        addStep={addStep}
                        title={'恭喜通過Scrum新手村'}
                        p1={'恭喜你成為Burger資訊的一員!'}
                        p2={
                            '若還有不熟悉的地方，也歡迎重新挑戰，幫助自己更加熟悉Scrum。'
                        }
                        p3={''}
                        btnText={'重新挑戰'}
                    />
                </div>
            )}
            {step === 1 && (
                <div className="h-screen w-screen flex-center-col bg2">
                    <div className="w-full flex justify-between items-center p-[38px]">
                        <div />
                        {step === 1 && <Step1 addStep={addStep} />}
                        <ProgressBar step={step} />
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className="h-screen w-screen flex-center-col bg3">
                    <div className="w-full flex justify-between items-center p-[38px]">
                        <div />
                        {step === 2 && <Step2 addStep={addStep} />}
                        <ProgressBar step={step} />
                    </div>
                </div>
            )}

            {step > 2 && step < 8 && (
                <div className="h-screen w-screen flex-center-col bg2">
                    <div className="w-full flex justify-between items-center p-[38px]">
                        <div />
                        {step === 3 && (
                            <Step3
                                addStep={addStep}
                                isCompleted={isCompleted}
                                setIsCompleted={setIsCompleted}
                            />
                        )}
                        {step === 4 && (
                            <Step4
                                addStep={addStep}
                                isCompleted={isCompleted}
                                setIsCompleted={setIsCompleted}
                            />
                        )}
                        {step === 5 && (
                            <Step5
                                addStep={addStep}
                                isCompleted={isCompleted}
                                setIsCompleted={setIsCompleted}
                            />
                        )}
                        {step === 6 && (
                            <Step6
                                addStep={addStep}
                                isCompleted={isCompleted}
                                setIsCompleted={setIsCompleted}
                            />
                        )}
                        {step === 7 && (
                            <Step7
                                addStep={addStep}
                                isCompleted={isCompleted}
                                setIsCompleted={setIsCompleted}
                            />
                        )}
                        <ProgressBar step={step} />
                    </div>
                </div>
            )}
            {step === 8 && (
                <div className="h-screen w-screen flex-center-col bg3">
                    <div className="w-full flex justify-between items-center p-[38px]">
                        <div />
                        {step === 8 && <Step8 addStep={addStep} />}
                        <ProgressBar step={step} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
