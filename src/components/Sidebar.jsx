import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {AiOutlineShoppingCart, AiOutlineCalendar} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiShoppingBag } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
    
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <=900){
            setActiveMenu(false);
        }
    }

    const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2`;

    const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2`;

    return (
        <div className="ml-3 h-screen md:overflow-hidden rounded-lg overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (<>
            <div className="flex justify-between items-center">
                <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900">
                    <SiShopware /><span>Shopify</span>
                </Link>
                <TooltipComponent content="Menu" position="BottomCenter">
                    <button type="button" style={{color:"#03C9D7"}} onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                        <MdOutlineCancel/>
                    </button>
                </TooltipComponent>
            </div>
            <div className="mt-10 text-slate-900">
                <NavLink to={'/dashboard'} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive?"#03C9D7":''})} className={({isActive}) => isActive? activeLink: normalLink}>
                    <FiShoppingBag/>
                    <span className="capitalize">dashboard</span>
                </NavLink>
                <NavLink to={'/products'} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive?"#03C9D7":''})} className={({isActive}) => isActive? activeLink: normalLink}>
                    <FiEdit/>
                    <span className="capitalize">Products</span>
                </NavLink>
                <NavLink to={'/orders'} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive?"#03C9D7":''})} className={({isActive}) => isActive? activeLink: normalLink}>
                    <AiOutlineShoppingCart/>
                    <span className="capitalize">Orders</span>
                </NavLink>
                <NavLink to={'/calendar'} onClick={handleCloseSideBar} style={({isActive}) => ({backgroundColor: isActive?"#03C9D7":''})} className={({isActive}) => isActive? activeLink: normalLink}>
                    <AiOutlineCalendar/>
                    <span className="capitalize">Calendar</span>
                </NavLink>
            </div>
            </>)}
        </div>
    )
}

export default Sidebar;