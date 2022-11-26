import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import pan from '../assets/image/pan.svg';
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
                    <div className="main-border-wrapper flex justify-between py-[25px] pl-[164px] pr-[70px]">
                        <div className="flex justify-between flex-col">
                            <h5>產品待辦清單 (Product Backlog)</h5>
                            <ul className="flex gap-1.5 flex-col">
                                <BurgerTop />
                                <div className="relative">
                                    <p className="drag-point bg-Fbrown">10</p>
                                    <DragItemMeat />
                                </div>
                                <div className="relative">
                                    <p className="drag-point bg-Fgreen">10</p>
                                    <DragItemSalad />
                                </div>
                                <div className="relative">
                                    <p className="drag-point bg-Fyellow">10</p>
                                    <DragItemCheese />
                                </div>
                                <div className="relative">
                                    <p className="drag-point bg-Fred">10</p>
                                    <DragItemTomato />
                                </div>
                                <BurgerBottom />
                            </ul>
                        </div>

                        <div className="flex gap-[6px] flex-col justify-between">
                            <div className="flex items-center flex-col w-[378px]">
                                <h5>產品待辦清單（Product Backlog）</h5>
                                <h6 className="text-Mblue-200 mt-4">
                                    限制 20點 / 5人
                                </h6>
                                <p className="text-Mred">
                                    點數已超過20點，再試試看!
                                </p>
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <p className="drag-border" />
                                <p className="drag-border" />
                                <p className="drag-border" />
                                <p className="drag-border" />
                                <img src={pan} alt="pan on screen" />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <img src={Po} alt="character on screen" />
                        <p className="footer-text">
                            在限制的
                            <span className="text-Mblue-200">點數</span>之內，將
                            <span className="text-Mblue-200">
                                產品清單內的任務移至短衝待辦清單
                            </span>
                            。<br />
                            就像是，我們為每個食材訂出烹飪時間，在有限的時間內選擇要烹飪食材。
                        </p>
                    </div>
                    <div className="absolute bottom-[30px] right-[30px]">
                        <MissionButton
                            text={'完成'}
                            isCompleted={isCompleted}
                            addStep={addStep}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step5;
