import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
const[isSidebarOpen,setIsSidebarOpen] = useState(false)
const [isModalOpen,setIsModalOpen] = useState(false)

const openSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen)
}
const closeSidebar = () =>{
    setIsSidebarOpen(false)
}

const openModalbar = () =>{
    setIsModalOpen(!isModalOpen)
}
    return <AppContext.Provider value = {{isSidebarOpen,isModalOpen,openSidebar,closeSidebar,openModalbar}}>
           {children}</AppContext.Provider>
}
//custom hook

const useGlobalContext = ()=>{
return useContext(AppContext)

}



export { AppContext,AppProvider,useGlobalContext}
