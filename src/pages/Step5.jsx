import { useState } from 'react';
import Title from '../components/Title';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import pan from '../assets/image/pan.svg';
import { BurgerTop, BurgerBottom } from '../components/Burger';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';

import { DragItemPoint } from '../components/DragItems';
const Step5 = ({ addStep }) => {
    const [page, setPage] = useState(1);
    const [totalPointSum, setTotalPointSum] = useState(0);
    const [overPoint, setOverPoint] = useState(false);
    const [pointCorrect, setPointCorrect] = useState(false);

    const addPage = () => {
        setPage(page + 1);
    };

    const [itemObj, setItemObj] = useState({
        productBacklog: {
            items: [
                {
                    title: '會員系統 (登入、註冊、權限管理)',
                    text: '',
                    priority: '1',
                    id: '1',
                    point: 10,
                    color: `bg-Fbrown`,
                    margin: '',
                },
                {
                    title: '前台職缺列表',
                    text: '(職缺詳細內容、點選可發送應徵意願)',
                    priority: '2',
                    id: '2',
                    point: 8,
                    color: `bg-Fyellow`,
                    margin: '',
                },
                {
                    title: '應徵者的線上履歷編輯器',
                    text: '',
                    priority: '3',
                    id: '3',
                    point: 13,
                    color: `bg-Fgreen`,
                    margin: '',
                },

                {
                    title: '後台職缺管理功能',
                    text: '(資訊上架、下架、顯示應徵者資料)',
                    priority: '4',
                    id: '4',
                    point: 13,
                    color: `bg-Fred`,
                    margin: '',
                },
            ],
        },
        sprintList: {
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

        // 計算sprint內的分數總和
        const newTotalPointSum = newItemObj.sprintList.items.reduce(
            (acc, val) => acc + val.point,
            0,
        );
        setTotalPointSum(newTotalPointSum);

        if (newTotalPointSum > 20) {
            setOverPoint(true);
            setPointCorrect(false);
        } else if (newTotalPointSum <= 20) {
            setPointCorrect(true);
        }
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'短衝規劃會議 (Sprint Planning)'} />

                <div className="glass board-type-p0">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="main-border-wrapper flex justify-between py-[25px] pl-[164px] pr-[70px]">
                            <div className="flex justify-between flex-col w-[378px] h-[439px]">
                                <h5>產品待辦清單 (Product Backlog)</h5>
                                <ul className="flex gap-1.5 flex-col h-full">
                                    <BurgerTop />

                                    <Droppable droppableId="productBacklog">
                                        {(provided) => (
                                            <div
                                                className="h-full relative flex justify-center flex-col"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {itemObj.productBacklog.items.map(
                                                    (item, i) => (
                                                        <div
                                                            key={item.id}
                                                            className="my-1"
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
                                                                        <DragItemPoint
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
                                                                            point={
                                                                                item.point
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
                                    <BurgerBottom />
                                </ul>
                            </div>

                            <div className="flex gap-[6px] flex-col justify-between relative w-[439px] h-[439px]">
                                <div className="flex items-center flex-col w-[378px] min-h-[97px]">
                                    <h5>產品待辦清單（Product Backlog）</h5>
                                    <h6 className="text-Mblue-200 mt-4">
                                        限制 20點 / 5人
                                    </h6>
                                    {overPoint && (
                                        <p className="text-Mred">
                                            點數已超過20點，再試試看!
                                        </p>
                                    )}
                                </div>
                                <Droppable droppableId="sprintList">
                                    {(provided) => (
                                        <div
                                            className="h-full relative"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {itemObj.sprintList.items.map(
                                                (item, i) => (
                                                    <div
                                                        key={item.id}
                                                        className="mb-[6px]"
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
                                                                    <DragItemPoint
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
                                                                        point={
                                                                            item.point
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
                                <div className="flex flex-col gap-[6px] absolute bottom-0 z-0">
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                    <img
                                        className="mt-4"
                                        src={pan}
                                        alt="pan on screen"
                                    />
                                </div>
                            </div>
                        </div>
                    </DragDropContext>
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
                            isCompleted={pointCorrect}
                            addStep={addStep}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step5;
