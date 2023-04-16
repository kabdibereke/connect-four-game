import React, { SetStateAction } from 'react'
import styles from './RulesModal.module.scss'
import check from '../../assets/check.svg'
import { motion  } from 'framer-motion'
type RulesModal = {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>
}

const RulesModal = ({setOpenModal}: RulesModal) => {
  return (
    <motion.div className={styles.modal}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <h2 className={styles.main_title}>RULES</h2>
        <div className={styles.text_wrapper}>
            <h3 className={styles.title}>OBJECTIVE</h3>
            <p className={styles.subtitle}>
            Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).
            </p>

            <h3 className={styles.title}>HOW TO PLAY</h3>
            <p className={styles.subtitle}><span>1</span> Red goes first in the first game.</p>
            <p className={styles.subtitle}><span>2</span> Players must alternate turns, and only one disc can be dropped in each turn. </p>
            <p className={styles.subtitle}><span>3</span> Players must alternate turns, and only one disc can be dropped in each turn. </p>
            <p className={styles.subtitle}><span>4</span> Red goes first in the first game.</p>
        </div>
        <button className={styles.btn} onClick={()=>setOpenModal(false)}>
          <img src={check} alt="check" />
        </button>
    </motion.div>
  )
}

export default RulesModal