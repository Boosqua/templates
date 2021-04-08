import React, {useState} from "react"
import ModalBackground from "./modals/modal_background"
import {ThemeProvider} from "react-jss"
export default function () {
   const [color, setColor] = useState("")
   return (
      <ThemeProvider theme={theme}>
         <button onClick={(e) => {
            e.preventDefault();
            setColor("red")
         }}>"red"</button>
         <button onClick={(e) => {
            e.preventDefault();
            setColor("yellow")
         }}>"yellow"</button>
         <button onClick={(e) => {
            e.preventDefault();
            setColor("blue")
         }}>"blue"</button>
         <ModalBackground />
      </ThemeProvider>
   )
}

const theme = {
   background: "rgba(0,0,0,.25)"
}