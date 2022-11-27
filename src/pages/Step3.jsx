import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import { BurgerTop, BurgerBottom } from '../components/Burger';
import meat from '../assets/image/food/meat.svg';
import cheese from '../assets/image/food/cheese.svg';
import salad from '../assets/image/food/salad.svg';
import tomato from '../assets/image/food/tomato.svg';
import { DragItemReuse } from '../components/DragItems';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';

const Step3 = ({ addStep }) => {
    const [page, setPage] = useState(1);
    const [isOrderCorrect, setIsOrderCorrect] = useState(null);
    const answerAry = ['1', '2', '3', '4'];

    const addPage = () => {
        setPage(page + 1);
    };

    const [itemObj, setItemObj] = useState({
        candidate: {
            items: [
                {
                    title: '會員系統 (登入、註冊、權限管理)',
                    text: '',
                    priority: '1',
                    id: '1',
                    src: meat,
                    color: `bg-Fbrown`,
                    margin: '',
                },
                {
                    title: '前台職缺列表',
                    text: '(職缺詳細內容、點選可發送應徵意願)',
                    priority: '2',
                    id: '2',
                    src: cheese,
                    color: `bg-Fyellow`,
                    margin: `ml-[152px]`,
                },
                {
                    title: '應徵者的線上履歷編輯器',
                    text: '',
                    priority: '3',
                    id: '3',
                    src: salad,
                    color: `bg-Fgreen`,
                    margin: '',
                },

                {
                    title: '後台職缺管理功能',
                    text: '(資訊上架、下架、顯示應徵者資料)',
                    priority: '4',
                    id: '4',
                    src: tomato,
                    color: `bg-Fred`,
                    margin: `ml-[152px]`,
                },
            ],
        },
        productBacklog: {
            items: [],
        },
    });

    const onDragEnd = (event) => {
        const { source, destination } = event;

        if (!destination) {
            return;
        }

        // 拷貝新的items (來自state)
        let newItemObj = { ...itemObj };

        // splice(start, deleteCount, item )
        // 從source剪下被拖曳的元素
        const [remove] = newItemObj[source.droppableId].items.splice(
            source.index,
            1,
        );

        // 在destination位置貼上被拖曳的元素
        newItemObj[destination.droppableId].items.splice(
            destination.index,
            0,
            remove,
        );

        // set state新的 itemObj
        setItemObj(newItemObj);

        // 確認productBacklog順序
        const checkProductBacklogOrder = () => {
            const currentProductBacklogOrder =
                newItemObj.productBacklog.items.map((ele) => {
                    return ele.priority;
                });
            return currentProductBacklogOrder.join('') === answerAry.join('')
                ? true
                : false;
        };

        setIsOrderCorrect(checkProductBacklogOrder);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝規劃會議 (Sprint Planning)'} />
                {page === 1 && (
                    <div className="glass board">
                        <div className="flex items-end gap-10">
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />

                                <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                                    <p className="text-start">
                                        相信你已經了解我們的團隊了，請你協助我們一起完成「人才招募系統」專案吧!
                                        待會要開短衝規劃會議，得先把
                                        <span className="text-Mblue-200">
                                            產品待辦清單
                                            <span className="text-Mblue-200">
                                                (Product Backlog)
                                            </span>
                                        </span>
                                        <br />
                                        給整理出來才行。 我們公司也推薦使用
                                        <span className="text-Mblue-200">
                                            Jira
                                        </span>
                                        來做任務管理喔。
                                    </p>
                                </div>
                                <div className="absolute bottom-[30px] left-[30px]">
                                    <img
                                        src={jiralogo}
                                        alt="jira logo on screen"
                                    />
                                </div>
                                <div className="absolute bottom-[30px] right-[30px]">
                                    <Button
                                        text={'接受挑戰'}
                                        addStep={page === 2 ? addStep : addPage}
                                    />
                                </div>
                            </>
                        </div>
                    </div>
                )}
                {page === 2 && (
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="glass board-type-p0">
                            <div className="main-border-wrapper flex justify-between py-[25px] pr-[100px] pl-10">
                                <div className="flex justify-between flex-col relative w-[596px]">
                                    <h5>「人才招募系統」內容物</h5>
                                    <Droppable droppableId="candidate">
                                        {(provided) => (
                                            <div
                                                className="h-full relative flex justify-center flex-col"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {itemObj.candidate.items.map(
                                                    (item, i) => (
                                                        <div
                                                            key={item.id}
                                                            className="my-4"
                                                        >
                                                            <Draggable
                                                                draggableId={
                                                                    item.id
                                                                }
                                                                index={i}
                                                            >
                                                                {(provided) => (
                                                                    <div
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        ref={
                                                                            provided.innerRef
                                                                        }
                                                                    >
                                                                        <DragItemReuse
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            text={
                                                                                item.text
                                                                            }
                                                                            src={
                                                                                item.src
                                                                            }
                                                                            color={
                                                                                item.color
                                                                            }
                                                                            margin={
                                                                                item.margin
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        </div>
                                                    ),
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                                <div>
                                    <div className="flex gap-[6px] flex-col w-[378px] relative">
                                        <h5>產品待辦清單（Product Backlog）</h5>
                                        <div className="h-[274px] z-50">
                                            <BurgerTop />
                                            <Droppable droppableId="productBacklog">
                                                {(provided) => (
                                                    <div
                                                        className="h-full relative"
                                                        ref={provided.innerRef}
                                                        {...provided.droppableProps}
                                                    >
                                                        {itemObj.productBacklog.items.map(
                                                            (item, i) => (
                                                                <div
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    className="mb-[6px]"
                                                                >
                                                                    <Draggable
                                                                        draggableId={
                                                                            item.id
                                                                        }
                                                                        index={
                                                                            i
                                                                        }
                                                                    >
                                                                        {(
                                                                            provided,
                                                                        ) => (
                                                                            <div
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                ref={
                                                                                    provided.innerRef
                                                                                }
                                                                            >
                                                                                <DragItemReuse
                                                                                    title={
                                                                                        item.title
                                                                                    }
                                                                                    text={
                                                                                        item.text
                                                                                    }
                                                                                    src={
                                                                                        item.src
                                                                                    }
                                                                                    color={
                                                                                        item.color
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </Draggable>
                                                                </div>
                                                            ),
                                                        )}
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                            <div className="absolute -bottom-[67px] flex flex-col gap-[6px]">
                                                <div className="drag-border z-0 pointer-events-none" />
                                                <div className="drag-border z-0 pointer-events-none" />
                                                <div className="drag-border z-0 pointer-events-none" />
                                                <div className="drag-border z-0 pointer-events-none" />
                                            </div>
                                            <BurgerBottom />
                                        </div>
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
                                    <span className="text-Mblue-200">
                                        優先順序
                                    </span>
                                    。
                                </p>
                            </div>
                            <div className="absolute bottom-[30px] right-[30px]">
                                <MissionButton
                                    text={'完成'}
                                    isCompleted={
                                        isOrderCorrect === true
                                    }
                                    addStep={page === 2 ? addStep : addPage}
                                />
                            </div>
                        </div>
                    </DragDropContext>
                )}
            </div>
        </>
    );
};

export default Step3;
