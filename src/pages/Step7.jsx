import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import confluence from '../assets/image/logo/confluence-logo.png';
import Dialogue from '../components/Dialogue';
import SmMeet from '../assets/image/meeting/sm-meeting.svg';
import { ButtonSelect, ButtonSelectError } from '../components/ButtonSelect';

const Step7 = ({ addStep, setIsCompleted, isCompleted }) => {
    const [page, setPage] = useState(1);
    const [question, setQuestion] = useState(1);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);

    const addPage = () => {
        setPage(page + 1);
    };

    const onAnswerQuestion = (e) => {
        const text = e.target.innerText;
        if (
            text === '這次我幫很多人救火耶!' ||
            text === '開發時間預估不準確，請後端改進避免delay到我。'
        ) {
            setIsError(false);
            setIsCorrect(false);
            console.log('choose error');
        } else if (
            text === '大家在開發上都會互相cover，任務都在時間內完成。' ||
            text === '可以記錄這次開發時間，讓預估團隊點數更精準。'
        ) {
            setIsError(null);
            setIsCorrect(true);
        }
    };

    const setAsyncTimeout = (cb, timeout = 0) =>
        new Promise((resolve) => {
            setTimeout(() => {
                cb();
                resolve();
            }, timeout);
        });

    const onSubmit = async () => {
        if (question === 1) {
            setIsSubmitted(1);
            setIsCorrect(false);
            await setAsyncTimeout(() => {
                setQuestion(2);
            }, 1000);

            await setAsyncTimeout(() => {
                setShowQuestion(true);
            }, 500);
        } else if (question === 2) {
            setIsSubmitted(2);
            setShowQuestion(false);
            await setAsyncTimeout(() => {
                setQuestion(3);
            }, 1000);
        }
    };

    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝自省會議 (Sprint Retrospective)'} />
                {page === 1 && (
                    <div className="glass board">
                        <div className="flex items-end gap-10">
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />

                                <div className="w-[493px] h-[272px] p-10 bg-white rounded-xl">
                                    <p className="text-start">
                                        今天剛好是開發B組的
                                        <span className="text-Mblue-200">
                                            短衝自省會議 (Sprint Retrospective)
                                        </span>
                                        ，我們都稱為Retro，帶你見識一下，看看
                                        <span className="text-Mblue-200">
                                            Retro
                                        </span>
                                        都該做些什麼吧~
                                        <br />
                                        我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再
                                        <span className="text-Mblue-200">
                                            Confluence
                                        </span>
                                        中。
                                    </p>
                                </div>
                                <div className="absolute bottom-[30px] left-[30px]">
                                    <img
                                        src={confluence}
                                        alt="jira logo on screen"
                                    />
                                </div>
                                <div className="absolute bottom-[30px] right-[30px]">
                                    <Button
                                        text={'加入會議'}
                                        addStep={page === 2 ? addStep : addPage}
                                    />
                                </div>
                            </>
                        </div>
                    </div>
                )}

                {page === 2 && (
                    <div className="glass board-type-p0">
                        <div>
                            <div id="box" className="main-border-wrapper p-5">
                                <div className="h-[385px] overflow-y-auto relative">
                                    <Dialogue src={SmMeet} chName={'SM 瑞瑞'}>
                                        <div className="dialogue-wrapper">
                                            <p>
                                                我們有那些做得好的地方，還迎大家提出來。
                                            </p>
                                        </div>
                                    </Dialogue>

                                    {isSubmitted !== 0 && (
                                        <div className="absolute right-0">
                                            <Dialogue src={null} chName="">
                                                <div className="dialogue-wrapper">
                                                    <p>
                                                        dia大家在開發上都會互相cover，任務都在時間內完成。
                                                    </p>
                                                </div>
                                            </Dialogue>
                                        </div>
                                    )}

                                    {question > 1 && (
                                        <div className="mt-28">
                                            <Dialogue
                                                src={SmMeet}
                                                chName={'SM 瑞瑞'}
                                            >
                                                <div className="dialogue-wrapper">
                                                    <p>
                                                        那我們還有哪些地方可以做的更好呢?
                                                    </p>
                                                </div>
                                            </Dialogue>
                                        </div>
                                    )}

                                    {isSubmitted !== 1 && (
                                        <div className="absolute right-0">
                                            <Dialogue src={null} chName="">
                                                <div className="dialogue-wrapper">
                                                    <p>
                                                        dia可以記錄這次開發時間，讓預估團隊點數更精準。
                                                    </p>
                                                </div>
                                            </Dialogue>
                                        </div>
                                    )}

                                    {question > 2 && isCorrect && (
                                        <div className="mt-28">
                                            <Dialogue
                                                src={SmMeet}
                                                chName={'SM 瑞瑞'}
                                            >
                                                <div className="dialogue-wrapper">
                                                    <p>
                                                        回答得非常正確!
                                                        相信你對Retro有一定的了解了。
                                                    </p>
                                                </div>
                                            </Dialogue>
                                        </div>
                                    )}
                                </div>
                                {question === 1 && isSubmitted === 0 && (
                                    <div className="flex gap-5 justify-between">
                                        {isError !== false && (
                                            <ButtonSelect
                                                name="false"
                                                text="這次我幫很多人救火耶!"
                                                onAnswerQuestion={
                                                    onAnswerQuestion
                                                }
                                            />
                                        )}

                                        {isError === false && (
                                            <ButtonSelectError
                                                name="false"
                                                text="這次我幫很多人救火耶!"
                                                onAnswerQuestion={
                                                    onAnswerQuestion
                                                }
                                                isError={isError}
                                            />
                                        )}
                                        <ButtonSelect
                                            onAnswerQuestion={onAnswerQuestion}
                                            text="大家在開發上都會互相cover，任務都在時間內完成。"
                                        />
                                    </div>
                                )}
                                {showQuestion && (
                                    <div className="flex gap-5 justify-between">
                                        <ButtonSelect
                                            onAnswerQuestion={onAnswerQuestion}
                                            text="可以記錄這次開發時間，讓預估團隊點數更精準。"
                                        />

                                        {isError !== false && (
                                            <ButtonSelect
                                                onAnswerQuestion={
                                                    onAnswerQuestion
                                                }
                                                text="開發時間預估不準確，請後端改進避免delay到我。"
                                            />
                                        )}

                                        {isError === false && (
                                            <ButtonSelectError
                                                name="false"
                                                text="開發時間預估不準確，請後端改進避免delay到我。"
                                                onAnswerQuestion={
                                                    onAnswerQuestion
                                                }
                                                isError={isError}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="footer">
                            <img src={Po} alt="character on screen" />
                            <p className="footer-text">
                                換你試試看! 重點在於
                                <span className="text-Mblue-200">
                                    「正面表述」
                                </span>
                                ，選出適合Retro的回饋吧!
                            </p>
                        </div>
                        <div className="absolute bottom-[30px] right-[30px]">
                            <MissionButton
                                text={isSubmitted === 1 ? '送出' : '完成'}
                                isCompleted={isCorrect}
                                addStep={isSubmitted === 2 ? addStep : onSubmit}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Step7;
