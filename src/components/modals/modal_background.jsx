import React from "react"
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
const useStyles = createUseStyles( (theme) => ({
   background: {
      padding: 0,
      margin: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
      background: (theme) => theme.background,
      left: 0,
      top: 0,
      "z-index": -12 
   }
}))
export default function ModalBackground(props){
   const theme = useTheme()

   const classes = useStyles({...theme, ...props})
   return (
      <div className={classes.background}>
         {":D"}
      </div>
   )
}

// ModalBackground.defaultProps = {
//    background: "orange"
// }