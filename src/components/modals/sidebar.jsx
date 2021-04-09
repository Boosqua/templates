import React, { useState, useEffect } from "react"
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import clsx from "clsx";
import {styles} from "./styles"
const useStyles = createUseStyles(styles)
export default function Sidebar({children, escapeKey, ...props}){
   const theme = useTheme()
   const [exit, setExit] = useState(false)
   const classes = useStyles({...theme, ...props})
   const close = () => {
      setExit(true)
      setTimeout(props.closeModal, 1000)
   }
   const handleKeydown = (e) => {
      if(e.key === "Escape"){
         close()
         document.removeEventListener("keydown", handleKeydown)
      }
   }
   useEffect(() => {
      if(escapeKey) document.addEventListener("keydown", handleKeydown)
   }, [])
   return (
      props.show ?
      <div 
      className={ clsx(classes.background, {
         [classes.backgroundExiting]: exit
      })} 
      onClick={(e) => {
         if(e.target === e.currentTarget){
            close()
         }
         }}>
         <span className={clsx(classes.modalContainer, {
            [classes.modalContainerExiting]: exit
         })}>
            {children}
         </span>
      </div>
      : null
   )
}

Sidebar.defaultProps = {
   modalBackground: "rgba(0,0,0,.25)"
}