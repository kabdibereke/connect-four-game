import styles from './Turn.module.scss'

interface TurnProps {
  currPlayer: number
  timer: number
  winner: number
  playAgain: () => void;
}

const Turn = ({currPlayer,timer,winner,playAgain}:TurnProps) => {
  return (
    <>
      {winner==0 ?  <div className={currPlayer==1? styles.wrapper: styles.wrapper2}>
          <p className={styles.title}>{`PLAYER ${currPlayer}’S TURN`}</p>
          <p className={styles.count}>{timer}s</p>
      </div>: '' }
     {winner!==0?  <div className={styles.winWrapper}>
          <p className={styles.title}>{`PLAYER ${winner}`}</p>
          <p className={styles.count}>WINS</p>
          <button className={styles.btn} onClick={playAgain}>
            play again
          </button>
      </div>:''}
    </>
  )
}

export default Turn