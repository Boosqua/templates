export const styles = (theme) => ({
   '@keyframes slideRight': {
    from: {left: 0},
    to: {right: 0}
   },
   background: {
      padding: 0,
      margin: 0,
      position: "fixed",
      width: "100%",
      height: "100%",
      background: (theme) => theme.modalBackground ? theme.modalBackground : "blue",
      left: 0,
      top: 0,
      "z-index": 10 
   },
   backgroundExiting: {
      animation: "$fadeOut 1000ms"
   },
   modalContainer: {
      position: "absolute",
      right: (theme) => theme.right? 0 : null,
      width: (theme) => theme.width? theme.width: 350,
      height: (theme) => theme.height? theme.height: "100%",
      background: (theme) => theme.background || "blue",
      animation: (theme) => theme.right ? `$enterRight 1000ms` : '$enterLeft 1000ms',
      animationTimingFunction: "ease-in-out",
      animationDelay: 0
   },
   modalContainerExiting: {
      animation: (theme) => theme.right ? `$exitRight 1000ms` : '$exitLeft 1000ms',
      animationTimingFunction: "ease-in-out",
      animationDelay: 0
   },
   "@keyframes enterRight": {
    "0%": {
      opacity: 0,
      transform: "translatex(100%)"
    },
    "100%": {
      opacity: 1,
      transform: "translatex(0)"
    }
  },
  "@keyframes exitRight": {
    "0%": {
      opacity: 1,
      transform: "translatex(0)"
    },
    "100%": {
      opacity: 0,
      transform: "translatex(100%)"
    }
  },
   "@keyframes enterLeft": {
    "0%": {
      opacity: 0,
      transform: "translatex(-100%)"
    },
    "100%": {
      opacity: 1,
      transform: "translatex(0)"
    }
  },
  "@keyframes exitLeft": {
    "0%": {
      opacity: 1,
      transform: "translatex(0)"
    },
    "100%": {
      opacity: 0,
      transform: "translatex(-100%)"
    }
  },
  "@keyframes fadeOut": {
     "0%": {
        opacity: 1
     },
     "100%": {
        opacity: 0
     }
  }
})