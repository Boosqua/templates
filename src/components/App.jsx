import React, {useState, useEffect} from "react"
import jss from "jss"
import reset from 'reset-jss'
import Button from "./buttons/button"
export default function () {
   const sheet = jss.createStyleSheet(reset)
   sheet.attach()
   const [modal, setModal] = useState(true)
   // const [pos, setPos] = useState(-420)
   // const int =() => {
   //    let pos1 = pos
   //    const int = setInterval( () => {
   //    pos1+= 3
   //    setPos(pos1)
   //    if(pos1 >= 0){
   //       setPos(0)
   //       stop()
   //    }
   // }, 1)
   // const stop = () => {
   // clearInterval(int)
   // }}
   
   // useEffect(() => int(), [])
   return (

         <Button>
               <span>Button</span>
         </Button>

   )
}


