import { useState } from 'react';
import Title from '../components/Title';
import ButtonText from '../components/ButtonText';
import Po from '../assets/image/introduce/po-introduce.svg';
import Sm from '../assets/image/introduce/sm-introduce.svg';
import Dt from '../assets/image/introduce/dt-introduce.svg';

const Step2 = ({ addStep }) => {
    const [page, setPage] = useState(1);
    const addPage = () => {
        setPage(page + 1);
    };
    return (
        <>
            <div className="flex-center-col gap-5">
                <Title text={'角色介紹'} />
                <div className="glass board">
                    <div className="flex items-end gap-10">
                        {page === 1 && (
                            <>
                                <img
                                    className="inline-block"
                                    src={Po}
                                    alt="character on screen"
                                />
                                <div>
                                    <h4 className="text-left mb-3 text-Mblue-200">
                                        PO 滾滾
                                    </h4>
                                    <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                                        <p className="text-start">
                                            <span className="text-Mblue-200">
                                                Product Owner
                                            </span>
                                            （產品負責人）代表客戶參與開發流程，確保開發團隊的產品符合客戶需求。
                                            我會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順，對齊產品目標，最後排出產品的代辦清單。
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        {page === 2 && (
                            <>
                                <img
                                    className="inline-block"
                                    src={Sm}
                                    alt="character on screen"
                                />
                                <div>
                                    <h4 className="text-left mb-3 text-Cred">
                                        SM 瑞瑞
                                    </h4>
                                    <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                                        <p className="text-start">
                                            <span className="text-Cred">
                                                Scrum Master
                                            </span>
                                            負責確保開發團隊依照 Scrum
                                            的方式進行產品開發，並排除任何會影響
                                            Scrum 流程的障礙，協助改善開發流程。
                                            SM不是以「領導者」的姿態帶領專案，而是
                                            Scrum 規則的「執行者」。
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-10">
                        {page === 3 && (
                            <>
                                <img
                                    className="inline-block"
                                    src={Dt}
                                    alt="character on screen"
                                />
                                <div className="text-start">
                                    <h4 className="inline-block text-left mb-3 text-Cblue mr-[23px]">
                                        DT 軟軟
                                    </h4>
                                    <h4 className="inline-block text-left mb-3 text-Corange">
                                        DT 方方
                                    </h4>
                                    <div className="w-[493px] h-[236px] p-10 bg-white rounded-xl">
                                        <p className="text-start">
                                            <span className="text-Mblue">
                                                Development Team
                                            </span>
                                            開發團隊負責開發與交付產品。開發團隊為跨領域團隊，可由設計師、工程師等不同的專業人士所組成。
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="absolute bottom-[30px] right-[30px]">
                        <ButtonText
                            text={'下一步'}
                            addStep={page === 3 ? addStep : addPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step2;
