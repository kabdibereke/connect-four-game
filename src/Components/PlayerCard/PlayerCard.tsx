import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import playerOne from '../../assets/player-one.svg'
import playerTwo from '../../assets/player-two.svg'
import styles from './PlayerCard.module.scss'
type PlayerCardProps = {
    player: 'one' | 'two',
    winner: number;
    setWinnerCount: Dispatch<SetStateAction<{ player1: number; player2: number; }>>;
     winnerCount: { player1: number; player2: number; };
}

const PlayerCard = ({player,winner,setWinnerCount,winnerCount}:PlayerCardProps) => {
  
  useEffect(()=> {
      if(winner==1) {
        setWinnerCount({...winnerCount, player1: winnerCount.player1+1})
      }else if(winner==2)  {
        setWinnerCount({...winnerCount, player2: winnerCount.player2+1})
      }

  },[winner])
  return (
    <div className={styles.wrapper}>
        <img src={player=='one'? playerOne:  playerTwo} alt="playerOne"  className={styles.img}/>
        <p className={styles.title}>
            {player=='one'? "player 1": "player 2"}
        </p>
        <p className={styles.count}>{player=='one'? winnerCount.player1 : winnerCount.player2}</p>
    </div>
  )
}

export default PlayerCard