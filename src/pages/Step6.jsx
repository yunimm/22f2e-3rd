import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import confluence from '../assets/image/logo/confluence-logo.png';
import { DragItemBlank } from '../components/DragItems';

const Step6 = ({ addStep, setIsCompleted, isCompleted }) => {
    const [page, setPage] = useState(1);
    const margin = `ml-[152px]`;
    const src = true;
    const addPage = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝 (Sprint)'} />
                {page === 1 && (
                    <div className="glass board">
                        <div className="flex items-end gap-10">
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />

                                <div className="w-[493px] h-[366px] p-10 bg-white rounded-xl">
                                    <p className="text-start">
                                        等等，是不是還沒有向你介紹到
                                        <span className="text-Mblue-200">
                                            短衝(Sprint)!
                                        </span>
                                        <br />
                                        <br />
                                        Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦{' '}
                                        <span className="text-Mblue-200">
                                            每日站立會議(Daily Scrum)
                                        </span>
                                        ，追蹤成員間的工作狀況。
                                        <br />
                                        <br />
                                        除了每日站立會議，在Sprint的結束也會包含
                                        <span className="text-Mblue-200">
                                            短衝檢視會議(Sprint
                                            Review)、短衝自省會議(Sprint
                                            Retrospective)
                                        </span>
                                        。
                                        <br />
                                        <br />
                                        在這裡我們推薦使用
                                        <span className="text-Mblue-200">
                                            Confluence
                                        </span>
                                        軟體做紀錄。
                                    </p>
                                </div>
                                <div className="absolute bottom-[30px] left-[30px]">
                                    <img
                                        src={jiralogo}
                                        alt="jira logo on screen"
                                    />
                                </div>
                                <div className="absolute bottom-[30px] right-[30px]">
                                    <ButtonText
                                        text={'下一步'}
                                        addStep={page === 3 ? addStep : addPage}
                                    />
                                </div>
                            </>
                        </div>
                    </div>
                )}
                {page === 2 && (
                    <div className="glass board-type-p0">
                        <div className="flex justify-between gap-5">
                            <div className="flex gap-[30px] flex-col">
                                <div className="sprint-title border-Mblue">
                                    <h5>每日站立會議</h5>
                                    <h5>(Daily Scrum)</h5>
                                </div>
                                <div className="w-[360px] text-left">
                                    <p>
                                        在Sprint當中每天由SM主持會議，以15分鐘為限制。
                                        <br />
                                        在會議中需報告三件事 :<br />
                                        &bull; 昨天為團隊的短衝目標(Sprint
                                        Goal)做了那些進度 <br />
                                        &bull;
                                        今天我會如何準備來幫助團隊達到短衝目標
                                        <br /> &bull; 過程中有遇到什麼問題、難題
                                        <br />
                                        透過團隊分享，追蹤大家的工作狀況。
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[30px] flex-col">
                                <div className="sprint-title border-Cred">
                                    <h5>短衝檢視會議</h5>
                                    <h5>(Sprint Review)</h5>
                                </div>
                                <div className="w-[360px] text-left">
                                    <p>
                                        用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[30px] flex-col">
                                <div className="sprint-title border-Mblue">
                                    <h5>短衝檢視會議</h5>
                                    <h5>(Sprint Review)</h5>
                                </div>
                                <div className="w-[360px] text-left">
                                    <p>
                                        團隊在自省會議裡,
                                        會共同回顧該短衝歷程發生的事情。
                                        <br />
                                        &bull; 好的地方
                                        <br />
                                        &bull; 可以改進的地方
                                        <br /> &bull; 如何維持我們已有的成功經驗
                                        <br />
                                        優化工作流程、讓團隊有變得更好的機會。推薦工具Confluence。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-[30px] left-[30px]">
                            <img
                                src={confluence}
                                alt="confluence logo on screen"
                            />
                        </div>
                        <div className="absolute bottom-[30px] right-[30px]">
                            <Button
                                text={'接受挑戰'}
                                addStep={page === 3 ? addStep : addPage}
                            />
                        </div>
                    </div>
                )}
                {page === 3 && (
                    <div className="glass board-type-p0">
                        <div className="main-border-wrapper pr-[100px] pl-10 bg-scrum">
                            <div className="flex flex-col items-center w-full">
                                <p className="drag-border mb-[92px] ml-52 mt-10" />
                                <p className="drag-border ml-52" />
                                <p className="drag-border ml-[780px] mt-5" />
                            </div>
                            <div className="flex gap-[10px] mt-[47px] relative">
                                <DragItemBlank text="短衝檢視會議 (Sprint Review)" />
                                <DragItemBlank text="短衝檢視會議 (Sprint Review)" />
                                <DragItemBlank text="短衝檢視會議 (Sprint Review)" />
                                <div className="absolute left-0 z-0 flex justify-between gap-[10px]">
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <img src={Po} alt="character on screen" />
                            <p className="footer-text">
                                換你試試看! 在這經典的
                                <span className="text-Mblue-200">
                                    Scrum流程圖
                                </span>
                                中，有三個重要的會議會執行。
                                <br />
                                嘗試安排他們的名字到正確的位置去吧!
                            </p>
                        </div>
                        <div className="absolute bottom-[30px] right-[30px]">
                            <MissionButton
                                text={'完成'}
                                isCompleted={isCompleted}
                                addStep={page === 3 ? addStep : addPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Step6;
