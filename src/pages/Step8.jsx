import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Po from '../assets/image/introduce/po-introduce.svg';
import badge from '../assets/image/badge.gif';
const Step8 = ({ addStep }) => {
    const [page, setPage] = useState(1);
    const addPage = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                {page === 1 && <Title text={'學習資源'} />}
                <div className="glass board">
                    {page === 1 && (
                        <div className="flex items-end gap-10">
                            <img
                                className="inline-block"
                                src={Po}
                                alt="character on screen"
                            />
                            <div className="w-[493px] h-[314px] p-10 bg-white rounded-xl">
                                <div className="text-start">
                                    謝謝你，和我們一起完成這項專案，我們將提供以下資源幫助你持續學習!
                                    <br />
                                    <ul>
                                        <li>
                                            <a
                                                className="underline underline-offset-1 text-Mblue"
                                                href="https://www.titansoft.com/tw/agile_skills/scrum"
                                            >
                                                1. 鈦坦 Scrum 流程參考文件
                                            </a>
                                        </li>
                                        <li>
                                            2. Jira 和 Confluence 補充資源
                                            <ul className="list-disc text-Mblue ml-10 underline underline-offset-1">
                                                <li>
                                                    <a href="https://www.youtube.com/watch?v=SOVGEsV5O9A">
                                                        Scrum in Jira Software
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/watch?v=ktz6rObhRSU">
                                                        Sprint Planning with
                                                        Jira
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.atlassian.com/agile">
                                                        其他 Agile with Jira資訊
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/watch?v=1-07JpsPMuk">
                                                        How to user Jira &
                                                        Confluence together
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {page === 2 && (
                        <>
                            <div className="bg-Mgray-200 w-[880px] h-[328px] flex justify-center items-center rounded-[30px] mb-32">
                                <img
                                    className="mb-3"
                                    src={badge}
                                    alt="badge on screen"
                                />
                            </div>
                            <div className="footer">
                                <img src={Po} alt="character on screen" />
                                <p className="footer-text">
                                    恭喜你完成Scrum新手村所有挑戰，獲得漢堡神廚徽章，從今天開始你就是我們Burger資訊的一員了!
                                </p>
                            </div>
                        </>
                    )}
                    <div className="absolute bottom-[30px] right-[30px]">
                        <Button
                            text={page === 2 ? '獲得徽章' : '完成'}
                            addStep={page === 2 ? addStep : addPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step8;
