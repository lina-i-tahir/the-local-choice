
import { motion } from "framer-motion";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const leftWindow = (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <div style={{
        width: '85px',
        height: '100px',
        backgroundColor: '#ebdec5',
        borderRadius: '90% 0 0 0', 
        borderTop: '4px solid #75696a',
        borderBottom: '2px solid #75696a',
        borderLeft: '4px solid #75696a',
        borderRight: '2px solid #75696a',
      }}/>
      <div style={{
        width: '85px',
        height: '100px',
        backgroundColor: '#ebdec5',
        borderRadius: '0 0 0 0', 
        borderTop: '2px solid #75696a',
        borderBottom: '4px solid #75696a',
        borderLeft: '4px solid #75696a',
        borderRight: '2px solid #75696a',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
      }}/>
    </div>
    </>
  )

  const rightWindow = (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <div style={{
        width: '85px',
        height: '100px',
        backgroundColor: '#ebdec5',
        borderRadius: '0 90% 0 0', 
        borderTop: '4px solid #75696a',
        borderBottom: '2px solid #75696a',
        borderLeft: '2px solid #75696a',
        borderRight: '4px solid #75696a',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
      }}/>
      <div style={{
        width: '85px',
        height: '100px',
        backgroundColor: '#ebdec5',
        borderRadius: '0 0 0 0', 
        borderTop: '2px solid #75696a',
        borderBottom: '4px solid #75696a',
        borderLeft: '2px solid #75696a',
        borderRight: '4px solid #75696a',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
      }}/>
    </div>
    </>
  )

  const windowLedge = (
    <>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <div style={{
        width: '183px',
        height: '8px',
        backgroundColor: '#75696a',
        border: '1px solid #ebdec5',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 0 20% 20%', 
      }}/>
    </div>
    </>
  )

const WindowAnimation = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const enterStore = (storeId) => {
    navigate(`/stores/${storeId}`)
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (

    <>
    
    <div style={{width: '182px', 
                position: 'relative',
                padding: '50px'
                }}>
        <div style={{
                    display: 'flex',
                    justifyContent: 'center',
        }}>
          <div style={{
            width: '174px',
            height: '204px',
            backgroundColor: '#e2d3b8',
            borderRadius: '50% 50% 0 0', 
            border: '4px solid #75696a',
            position: 'absolute'
          }}/>
          <img src={props.store.image} 
              alt={props.store.name}
              onClick={() => enterStore(props.store._id)}
              style={{
              position: 'absolute',
              width: '160px',
              top: '120px',
              cursor: 'pointer',
          }}/>
        </div>
      <Grid container spacing={0}
                      direction="row"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
        <motion.div 
                    animate={{ transform: isHovered ? 'rotateY(-140deg)' : 'rotateY(0deg)'
                                }}
                    transition={{ ease: "easeOut", duration: 0.6 }}
                    style={{ transformOrigin: 'left' }}
        >
          <Grid item xs={6} sx={{zIndex: 2}}>
            {leftWindow}
          </Grid>
        </motion.div>

        <motion.div 
                    animate={{ transform: isHovered ? 'rotateY(140deg)' : 'rotateY(0deg)'
                                }}
                    transition={{ ease: "easeOut", duration: 0.6 }}
                    style={{ transformOrigin: 'right' }}
        >
          <Grid item xs={6} sx={{zIndex: 2}}>
            {rightWindow}
          </Grid>
        </motion.div>
        

      </Grid>
    
    </div>
    </>
  )
}

export default WindowAnimation