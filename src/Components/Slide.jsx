import React,{useState} from 'react'
import { FaHome, FaChartBar, FaSnapchat, FaDatabase } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


const Slide = ({ children }) => {
    const[isopen,setIsOpen] = useState(false);
    const[slideWidth,setSlideWidth] = useState('w-64')
    const[logoDisplay,setLogoDisplay] = useState('block')
     
    const isToggle = ()=>{
        setIsOpen(!isopen)
        setSlideWidth(isopen?'w-64':'w-16')
        // setSlideWidth(isOpen ? 'w-64' : 'w-16');
        setLogoDisplay(isopen?'block':'hidden')
    }
   
    
    const slideData = [

        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: <FaHome />
        },
        {
            path: '/statistic',
            name: 'Statistic',
            icon: <FaChartBar />
        },
        {
            path: '/chat',
            name: 'Chat',
            icon: <FaSnapchat />
        },
        {
            path: '/settings',
            name: 'Settings',
            icon: <FaDatabase />
        },
    ]
    
    return (
        <>
            {/* container div */}
            <div className="flex">
                {/* Slider  div*/}
                <div className={`bg-[#fff] ${slideWidth} text-black  h-screen transition-all duration-500 `}>
                    <div className="flex items-center py-6 px-4">
                        <h1 className={`pr-24 text-2xl ${logoDisplay}`}>Logo</h1>
                        
                        <div className="cursor-pointer text-2xl" onClick={isToggle}>
                            {isopen?<RxHamburgerMenu/>:<RxCross2/>}
                        </div>
                    </div>

                    {
                        slideData.map((value, index) => (
                            <NavLink to={value.path} key={index} activeClassName="active active:bg-[#f7f7f8] " className='flex items-center py-6 px-4 hover:bg-[#f7f7f8] '>
                                <div className="pr-10 ">{value.icon}</div>
                                <div className="link_name">{value.name}</div>
                            </NavLink>
                        ))
                    }


                </div>
                    {/* Main */}
                <main className='w-full p-5 flex bg-[#f7f7f8] text-3xl'>{children}</main>

            </div>
        </>
    )
}

export default Slide
