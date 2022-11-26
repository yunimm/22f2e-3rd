import burgerTop from '../assets/image/burger-top.svg';
import burgerBottom from '../assets/image/burger-bottom.svg';

const BurgerTop = () => {
    return (
        <>
            <div className="relative">
                <img src={burgerTop} alt="burgerTop on screen" />
                <span className="font-bold text-[#9E3C26] absolute inset-x-0 top-0 translate-y-3/4">
                    優先度高
                </span>
            </div>
        </>
    );
};

const BurgerBottom = () => {
    return (
        <>
            <div className="relative">
                <img src={burgerBottom} alt="burgerTop on screen" />
                <span className="font-bold text-[#9E3C26] absolute inset-x-0 bottom-1">
                    優先度低
                </span>
            </div>
        </>
    );
};

export { BurgerTop, BurgerBottom };
