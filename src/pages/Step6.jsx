import { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import ButtonText from '../components/ButtonText';
import MissionButton from '../components/MissionButton';
import Po from '../assets/image/introduce/po-introduce.svg';
import jiralogo from '../assets/image/logo/jira-logo.png';
import confluence from '../assets/image/logo/confluence-logo.png';
import { DragItemBlank } from '../components/DragItems';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';

const Step6 = ({ addStep, isCompleted }) => {
    const [page, setPage] = useState(1);
    const [isOrderCorrect, setIsOrderCorrect] = useState(null);
    const answerAry = ['1', '2', '3'];

    const addPage = () => {
        setPage(page + 1);
    };

    const [itemObj, setItemObj] = useState({
        candidate: {
            items: [
                {
                    title: '短衝檢視會議 (Sprint Review)',
                    text: '',
                    priority: '2',
                    id: '1',
                    margin: ``,
                },
                {
                    title: '每日站立會議 (Daily Scrum)',
                    text: '',
                    priority: '1',
                    id: '2',
                    margin: ``,
                },
                {
                    title: '短衝自省會議 (Sprint Retrospective)',
                    text: '',
                    priority: '3',
                    id: '3',
                    margin: ``,
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
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className="glass board-type-p0">
                            <div className="main-border-wrapper pr-[100px] pl-10 bg-scrum relative">
                                <Droppable droppableId="productBacklog">
                                    {(provided) => (
                                        <div
                                            className="h-[374px] relative flex flex-col "
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {itemObj.productBacklog.items.map(
                                                (item, i) => (
                                                    <div
                                                        key={item.id}
                                                        className="ml-[500px] mt-[30px] my-[23px] w-[378px]"
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
                                                                    <DragItemBlank
                                                                        text={
                                                                            item.title
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
                                <div className="flex flex-col items-center w-full absolute -top-2 -left-12 gap-[52px]">
                                    <p className="drag-border  ml-[335px] mt-10" />
                                    <p className="drag-border ml-[335px] " />
                                    <p className="drag-border ml-[335px] mb-[400px]" />
                                </div>
                                <div className="absolute left-10 z-0 flex gap-[10px]">
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                    <p className="drag-border" />
                                </div>
                                <div className="flex gap-[10px]">
                                    <Droppable droppableId="candidate">
                                        {(provided) => (
                                            <div
                                                className="h-[300px] w-full flex justify-between"
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {itemObj.candidate.items.map(
                                                    (item, i) => (
                                                        <div
                                                            key={item.id}
                                                            className="mr-[9.8px]"
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
                                                                        <DragItemBlank
                                                                            text={
                                                                                item.title
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
                                    isCompleted={isOrderCorrect === true}
                                    addStep={page === 3 ? addStep : addPage}
                                />
                            </div>
                        </div>
                    </DragDropContext>
                )}
            </div>
        </>
    );
};

export default Step6;
