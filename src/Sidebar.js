import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from './context'
import { social, links } from './data'
const Sidebar = () => {
  const {isSidebarOpen,closeSidebar} = useGlobalContext()

  return <aside className= {`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

<div className = 'sidebar-header'>
  <img src = {logo} className = 'logo' alt = 'coding addict' />
  <button   onClick = {closeSidebar} className = 'close-btn'>  <FaTimes/></button>

  </div>
  <ul className = "links">
   {
    links.map((link)=>{
      const {id,icon,url,text} = link ;
      return (
<li  key = {id}>
  <a href = {url} > {icon} {text} </a>
</li>

      )
    })
   }
   
    </ul>
    <ul className = 'social-icons'>
      {
        social.map((link) =>{
          const {icon,url,id} = link ;
          return(
            <li key = {id}>
             <a href = {url} >{  icon
        }</a>
            </li>
          )
        })
      }
    </ul>

  </aside>
}

export default Sidebar
