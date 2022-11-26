import { useState, useEffect } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import PoMeet from '../assets/image/meeting/po-meeting.svg';
import SmMeet from '../assets/image/meeting/sm-meeting.svg';
import DtAMeet from '../assets/image/meeting/dt-a-meeting.svg';
import DtBMeet from '../assets/image/meeting/dt-b-meeting.svg';
import Dialogue from '../components/Dialogue';

const Step4 = ({ addStep, setIsCompleted, isCompleted }) => {
    const [page, setPage] = useState(1);

    const addPage = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        if (page === 2) {
            let box = document.querySelector('#box');
            box.addEventListener('scroll', function (e) {
                let scrollTop = e.target.scrollTop;
                let clientHeight = e.target.clientHeight;
                let scrollHeight = e.target.scrollHeight;
                let total = clientHeight + scrollHeight;
                console.log(total);
                // 打印数值
                console.table([
                    {
                        label: '距顶部',
                        value: scrollTop,
                    },
                    {
                        label: '可视区高度',
                        value: clientHeight,
                    },
                    {
                        label: '滚动条总高度',
                        value: scrollHeight,
                    },
                    {
                        label: '距顶部 + 可视区高度',
                        value: scrollTop + clientHeight,
                    },
                ]);
                if (scrollTop === 820) {
                    setIsCompleted(true);
                }
            });
        }
    });

    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝規劃會議 (Sprint Planning)'} />
                {page === 1 && (
                    <div className="glass board">
                        <div className="flex items-center gap-10">
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />

                                <div className="w-[493px] h-[184px] p-10 bg-white rounded-xl">
                                    <p className="text-start">
                                        感謝你把產品待辦清單整理完成，接下來我們要召集
                                        Scrum Master 和開發團隊，共同召開
                                        <span className="text-Mblue-200">
                                            短衝規劃會議 (Sprint Planning)，
                                        </span>
                                        和我們一起加入會議室吧。
                                    </p>
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
                        <div
                            id="box"
                            className="main-border-wrapper p-5 overflow-auto"
                        >
                            <Dialogue src={PoMeet} chName={'PO 滾滾'}>
                                <div className="dialogue-wrapper h-[106px]">
                                    <p>今天有新人加入我們，請大家多多照顧哦!</p>
                                </div>
                            </Dialogue>
                            <Dialogue src={PoMeet} chName={'PO 滾滾'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完哪些工作事項來達到商業需求，列出
                                        <span className="text-Mblue-200">
                                            短衝待辦清單(Sprint Backlog)
                                        </span>
                                        ，並由開發團隊在接下來的產品開發期裡執行。
                                    </p>
                                </div>
                            </Dialogue>
                            <Dialogue src={SmMeet} chName={'SM 瑞瑞'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        嗨嗨你是新來的前端吧！我是這次的Scrum
                                        Master
                                        瑞瑞，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升隊成員對
                                        Scrum 瞭解。
                                    </p>
                                </div>
                            </Dialogue>
                            <Dialogue src={SmMeet} chName={'SM 瑞瑞'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        我們團隊
                                        <span className="text-Mblue-200">
                                            一次Sprint是兩周的時間
                                        </span>
                                        ，依照我的觀察，目前可負擔的
                                        <span className="text-Mblue-200">
                                            點數(Sprint Point)
                                        </span>
                                        大約是
                                        <span className="text-Mblue-200">
                                            20點
                                        </span>
                                        。
                                    </p>
                                </div>
                            </Dialogue>
                            <Dialogue src={DtAMeet} chName={'DT 軟軟'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        新來的，你應該不知道點數是什麼意思吧！哈哈~我來跟你介紹一下吧~
                                        <br />
                                        <span className="text-Mblue-200">
                                            一次Sprint是兩周的時間
                                        </span>
                                        ，是用大概花費的時間預估出的相對點數。
                                    </p>
                                </div>
                            </Dialogue>
                            <Dialogue src={DtBMeet} chName={'DT 方方'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        沒錯，如軟軟說的，我這邊已經把剛剛討論好的點數標上去囉！
                                        <br />
                                        你來練習把任務排到短衝待辦清單吧！
                                    </p>
                                </div>
                            </Dialogue>
                            <Dialogue src={SmMeet} chName={'SM 瑞瑞'}>
                                <div className="dialogue-wrapper w-[1016px]">
                                    <p>
                                        我們平常管理任務是使用
                                        <span className="text-Mblue-200">
                                            Jira
                                        </span>
                                        這套軟體，你有時間記得先去註冊和熟悉唷！
                                    </p>
                                </div>
                            </Dialogue>
                        </div>

                        <div className="absolute bottom-[30px] right-[30px]">
                            <MissionButton
                                text={'接受挑戰'}
                                isCompleted={isCompleted}
                                addStep={page === 2 ? addStep : addPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Step4;
