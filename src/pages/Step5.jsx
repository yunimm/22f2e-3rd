import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import { BurgerTop, BurgerBottom } from '../components/Burger';

import {
    DragItemMeat,
    DragItemCheese,
    DragItemSalad,
    DragItemTomato,
} from '../components/DragItems';
const Step5 = ({ addStep, setIsCompleted, isCompleted }) => {
    const [page, setPage] = useState(1);

    const addPage = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝規劃會議 (Sprint Planning)'} />

                <div className="glass board-type-p0">
                    <div className="border border-[#AAAAAA] rounded-xl w-[1220px] h-[491px] flex justify-between py-[25px] pr-[100px] pl-10">
                        <div className="flex justify-between flex-col">
                            <h5>產品待辦清單 (Product Backlog)</h5>
                            <ul className="flex gap-1.5 flex-col mb-4">
                                <DragItemMeat />
                                <DragItemSalad />
                                <DragItemCheese />
                                <DragItemTomato />
                            </ul>
                        </div>
                        <div>
                            <div className="flex gap-[6px] flex-col">
                                <h5>產品待辦清單（Product Backlog）</h5>
                                <BurgerTop />

                                <div className="drag-border" />
                                <div className="drag-border" />
                                <div className="drag-border" />
                                <div className="drag-border" />

                                <BurgerBottom />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <img src={Po} alt="character on screen" />
                        <p className="footer-text">
                            我們收到客戶的需求提示，想要一個大漢堡，一定要有
                            <span className="text-Mblue-200">
                                肉、起司、生菜和番茄
                            </span>
                            。<br />
                            請依照產品需求，排放到產品待辦清單並調整
                            <span className="text-Mblue-200">優先順序</span>。
                        </p>
                    </div>
                    <div className="absolute bottom-[30px] right-[30px]">
                        <MissionButton
                            text={'完成'}
                            isCompleted={isCompleted}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step5;
