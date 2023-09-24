
import { motion } from "framer-motion";

const leftWindow = (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <div style={{
        width: '120px',
        height: '150px',
        backgroundColor: '#ebdec5',
        borderRadius: '100% 0 0 0', 
        border: '5px solid',
        borderColor: '#75696a'
      }}/>
      <div style={{
        width: '120px',
        height: '120px',
        backgroundColor: '#ebdec5',
        borderRadius: '0 0 0 0', 
        border: '5px solid',
        borderColor: '#75696a',
      }}/>
    </div>
    </>
  )

const WindowAnimation = () => {


  return (

    <>
    {leftWindow}

    <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        
    //   animate={{
    //     scale: [1, 2, 2, 1, 1],
    //     rotate: [0, 0, 180, 180, 0],
    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     repeat: Infinity,
    //     repeatDelay: 1
    //   }}
    >   

        <div style={{backgroundColor: '#e4dccd', height: '100px', width: '100px'}}/>
        
    </motion.div>
    </>
  )
}

export default WindowAnimation