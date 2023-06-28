import React, { children } from 'react'
import { FaHome,FaChartBar,FaSnapchat,FaDatabase} from "react-icons/fa";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


const Slide = ({children}) => {
    const slideData = [
       
        {
            path:'/dashboard',
            name:'Dashboard',
            icon:<FaHome/>
        },
        {
            path:'/statistic',
            name:'Statistic',
            icon:<FaChartBar/>
        },
        {
            path:'/chat',
            name:'ChatMangement',
            icon:<FaSnapchat/>
        },
        {
            path:'/settings',
            name:'Settings',
            icon:<FaDatabase/>
        },
    ]
  return (
    <div className='bg-red-500 w-64 text-black h-screen'>
        <div className="flex justify-between">
            <h1 className="logo">Vaibhav's Dashboard</h1>
            <div className="cursor-pointer">
                <RxHamburgerMenu/>
            </div>
        </div>
        
        {
            slideData.map((value,index)=>(
                <NavLink to={value.path} key={index} activeClassName="active" className='flex justify-between'>
                    <div className="icon">{value.icon}</div>
                    <div className="link_name">{value.name}</div>
                 </NavLink>   
            ))
        }
        
        <main className='w-full p-5'>{children}</main>
    </div>
  )
}

export default Slide
