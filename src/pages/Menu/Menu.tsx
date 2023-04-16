import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'
import { Button } from '../../UI/Button/Button'
import { useState } from 'react'
import RulesModal from '../../Components/RulesModal/RulesModal'
import { motion  } from 'framer-motion'
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [openModal,setOpenModal] =useState(false)
  const navigate = useNavigate();
  return (
    <div className='container'>
        <motion.div className={styles.modal}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.buttons}>
                <Button img={true} appearance='yellow' onClick={()=>navigate('/ingame')} >
                    PLAY VS PLAYER
                </Button>
                <Button  appearance='white'  onClick={()=>setOpenModal(true)}>
                     GAME RULES
                </Button>
            </div>
        </motion.div>
        {openModal && <RulesModal setOpenModal={setOpenModal} />}
    </div>
  )
}

export default Menu