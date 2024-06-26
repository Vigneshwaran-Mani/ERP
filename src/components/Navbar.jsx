import React,{useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const handleClick = () => {

}

const NavButton = ({title, customFunc, icon, color, dotColor}) => {
    return (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "></span>
            {icon}
        </button>
    </TooltipComponent>
    )
}

const Navbar = () => {
    const {activeMenu, setActiveMenu, screenSize, setScreenSize} = useStateContext();

    useEffect(() => {
        const handleSize = () =>setScreenSize(window.innerWidth);

        window.addEventListener('resize',handleSize);
        handleSize();

        return () => window.removeEventListener('resize',handleSize);
    },[]);

    useEffect(() => {
        if(screenSize<=900){
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    },[screenSize]);

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>
            <div className="flex">
                <NavButton title="Cart" customFunc={() => handleClick('cart')} color="#03C9D7" icon={<FiShoppingCart/>}/>

                <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color="#03C9D7" icon={<BsChatLeft/>}/>

                <NavButton title="Notification" dotColor="#03C9D7" customFunc={() => handleClick('notification')} color="#03C9D7" icon={<RiNotification3Line/>}/>

                <TooltipComponent content="Profile" position="BottomCenter">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
                        <img className='rounded-full w-8 h-8' src={avatar} alt="img"/>
                    </div>
                </TooltipComponent>
            </div>
        </div>
    )
}

export default Navbar;