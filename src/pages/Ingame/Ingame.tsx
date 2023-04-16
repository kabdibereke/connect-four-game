import styles from './Ingame.module.scss'
import logo from '../../assets/logo.svg'
import PlayerCard from '../../Components/PlayerCard/PlayerCard'
import Footer from '../../UI/Footer/Footer'
import Board from '../../Components/Board/Board'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IBoard } from '../../interface/interface'
import { motion } from 'framer-motion'
const Ingame = () => {
    const [winner, setWinner]=useState(0)
    const [timeLeft, setTimeLeft] = useState(20);
    const [winnerCount, setWinnerCount]= useState({
      player1:0,
      player2:0
  })
    const initialBoard: IBoard = {
      //@ts-ignore
      rows: Array.from({ length: 6 }, (_, i) => ({
        columns: Array.from({ length: 7 }, (_, i) => ({ player: null })),
      })),
    };
    const [board, setBoard] = useState<IBoard>(initialBoard);
    const navigate=useNavigate()
    const resetGame =()=> {
      setTimeLeft(20)
      setBoard(initialBoard)
      setWinner(0)
      setWinnerCount({
        player1:0,
      player2:0
      })
    }

    const playAgain =()=> {
      setTimeLeft(20)
      setBoard(initialBoard)
      setWinner(0)
    }
  return (
   <>
    <div className="container">
        <motion.div className={styles.wrapper}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.2 }}>
             <div className={styles.menu_wrapper}>
                <button className={styles.btn} onClick={()=>navigate('/')}>
                quit game
                </button>
                <img src={logo} alt="logo" />
                <button className={styles.btn} onClick={resetGame}>
                    restart
                </button>
            </div>
           <div className={styles.board_wrapper}>
              <div className={styles.first}>
                  <PlayerCard player='one' winner={winner} setWinnerCount={setWinnerCount} winnerCount={winnerCount}/>
              </div>
                <div className={styles.second}> 
                  <Board winner={winner} setWinner={setWinner} setBoard={setBoard}  initialBoard={initialBoard} board={board} setTimeLeft={setTimeLeft} timeLeft={timeLeft} playAgain={playAgain}/>
                </div>
                <div className={styles.third}>
                  <PlayerCard player='two'  winner={winner} setWinnerCount={setWinnerCount} winnerCount={winnerCount}/>
                </div>
           </div>
        </motion.div>
    </div>
    <Footer  winner={winner}/>
   </>
  )
}

export default Ingame