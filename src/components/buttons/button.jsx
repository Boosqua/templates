import React, {useState} from "react"
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import clsx from "clsx";
const styles = {
   btnCnt: {
      width: 100,
      height: 25,
      background: "blue",
      display: "flex",
      alignItems  : "center",
      justifyContent: "center",
      padding: "10px 20px",
      margin: "10px 20px",
      borderRadius: "15px",
      '&:hover': {
         cursor: "pointer"
      }
   }
}
const useStyles = createUseStyles({
   btnCnt: {
      width: 100,
      height: 25,
      background: "blue",
      display: "flex",
      alignItems  : "center",
      justifyContent: "center",
      padding: "10px 20px",
      margin: "10px 20px",
      borderRadius: "15px",
      '&:hover': {
         cursor: "pointer"
      }
   },
   ripple: {
      backgroundImage: ""
   }
})
export default function Button({children, ...props}){
   const [ripplePos, setRipplePos] = useState({ stop: true, ripple: {}})
   const [ripple, setRipple] = useState(false)

   const classes = useStyles()
   return (
   <div className={classes.btnCnt} style={{ backgroundImage: ripplePos.ripple, }}onClick={ (e) => {
      if( e.target === e.currentTarget ){
         handleRipple(e, setRipplePos )
      }
      }}>
      {children}
      {/* {
         ripplePos.stop ? 
         null
         :<span style={{...ripplePos.ripple, position: "absolute", left: 0, top: 0, width: "100%", height: "100%"}}  />
      } */}
   </div>
   )
}
function handleRipple(e, setRipple, ripple){
   const x = e.pageX - e.currentTarget.offsetLeft
   const y = e.pageY - e.currentTarget.offsetTop
   const duration = 1000;
   const animationStart = {}
   const style = {ripple: {}}
   const animationStep = (timeStamp) => {
      console.log(timeStamp)
      if(!animationStart.time){
         animationStart.time = timeStamp
      }
      const frame = timeStamp - animationStart.time
      if(frame < duration){
         const easing = (frame/duration) * (2 - (frame/duration))
         const circle = `circle at ${x}px ${y}px`
         const color = `rgba(0, 0, 0, Z${.03 * (1 - easing)})`
         const stop = 90 * easing + "%"
         style.ripple = {
            backgroundImage: `radial-gradient(${circle}, ${color} ${stop}, transparent ${stop})`
            }
            setRipple({ stop: false, ripple: style.ripple.backgroundImage})
            window.requestAnimationFrame(animationStep)
      } else {
         // setRipple({stop: true})
      }
      window.cancelAnimationFrame(animationStep)
   }
   window.requestAnimationFrame(animationStep)
}
// $("html").on("click", ".btn", function(evt) {
//   var btn = $(evt.currentTarget);
//   var x = evt.pageX - btn.offset().left;
//   var y = evt.pageY - btn.offset().top;
  
//   var duration = 1000;
//   var animationFrame, animationStart;
  
//   var animationStep = function(timestamp) {
//     if (!animationStart) {
//       animationStart = timestamp;
//     }
   
//     var frame = timestamp - animationStart;
//     if (frame < duration) {
//       var easing = (frame/duration) * (2 - (frame/duration));
      
//       var circle = "circle at " + x + "px " + y + "px";
//       var color = "rgba(0, 0, 0, " + (0.3 * (1 - easing)) + ")";
//       var stop = 90 * easing + "%";

//       btn.css({
//         "background-image": "radial-gradient(" + circle + ", " + color + " " + stop + ", transparent " + stop + ")"
//       });

//       animationFrame = window.requestAnimationFrame(animationStep);
//     } else {
//       $(btn).css({
//         "background-image": "none"
//       });
//       window.cancelAnimationFrame(animationFrame);
//     }
    
//   };
  
//   animationFrame = window.requestAnimationFrame(animationStep);

// });