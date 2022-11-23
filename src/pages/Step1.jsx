import React from 'react';
import Title from '../components/Title';
import ButtonText from '../components/ButtonText';
import Po from '../assets/image/introduce/po-introduce.svg';

const Step1 = ({ addStep }) => {
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'前導'} />
                <div className="glass board">
                    <div className="flex items-end gap-10">
                        <img
                            className="inline-block"
                            src={Po}
                            alt="character on screen"
                        />
                        <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                            <p className="text-start">
                                Hello，歡迎你加入我們開發Burger組，我是負責這次任務的PO，
                                <span className="text-Mblue-200">滾滾</span>。
                                <br />
                                接下來將由我為你介紹
                                <span className="text-Mblue-200">
                                    Scrum的流程與精神
                                </span>
                                ，待組成成員介紹完畢後，請您協助我們一起完成我手上得新專案，如此一來便能於更明確地了解實際應用方式。
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-[30px] right-[30px]">
                        <ButtonText text={'下一步'} addStep={addStep} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step1;
