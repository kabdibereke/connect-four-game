import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './Board.module.scss'

import Turn from '../../UI/Turn/Turn'
import { IColumn, IBoard, IRow } from '../../interface/interface'
import Row from './Row'


interface BoardProps {
  winner: number
  setWinner: Dispatch<SetStateAction<number>>
  setBoard: Dispatch<SetStateAction<IBoard>>
  initialBoard: IBoard
  board: IBoard
  setTimeLeft: Dispatch<SetStateAction<number>>
  timeLeft: number
  playAgain: () => void;
}


const Board = ({winner,setWinner,setBoard,initialBoard,board,setTimeLeft,timeLeft,playAgain}:BoardProps) => {
  
 
  const [currPlayer, setCurrPlayer] = useState(1);


  useEffect(() => {
    const countdown = setInterval(() => {

      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(countdown);
     
      if(currPlayer==2) {
        setWinner(1)
       
      }else {
        setWinner(2)
        
      }
      
      setCurrPlayer(1);
    }
    return () => clearInterval(countdown);
  }, [timeLeft]);

  const updateBoard = (columnIndex: number): void => {
   
    setTimeLeft(20)
    if(winner==0) {
        let boardCopy: IBoard = board;
      let rowIndex: number = 0;
      let areColumnsFull = true;
      for (let r: number = 5; r >= 0; r--) {
        let columnPlayer = boardCopy.rows[r].columns[columnIndex].player;
        if (!columnPlayer) {
          boardCopy.rows[r].columns[columnIndex].player = currPlayer;
          rowIndex = r;
          areColumnsFull = false;
          break;
        }
      }
      if (!areColumnsFull) {
        setBoard(boardCopy);
        setCurrPlayer(currPlayer === 1 ? 2 : 1);
      }
      if (winCheck(rowIndex, columnIndex)) {
      
      
        setWinner(currPlayer)
        setCurrPlayer(1);
      } else {
        if (drawCheck()) {
        
          setWinner(3)
        
          setCurrPlayer(1);
        }
      }
    }
   
  };
  const drawCheck = (): boolean => {
    let isBoardFilled: boolean =
      board.rows.filter(
        (row: IRow) =>
          row.columns.filter((column: IColumn) => column.player === null)
            .length > 0
      ).length > 0
        ? false
        : true;
    return isBoardFilled;
  };
  const winCheck = (rowIndex: number, columnIndex: number): boolean => {
    return (
      checkHorizontal(rowIndex, columnIndex) ||
      checkVertical(rowIndex, columnIndex) ||
      checkDiagonalRight(rowIndex, columnIndex) ||
      checkDiagonalLeft(rowIndex, columnIndex)
    );
  };
  const checkDiagonalLeft = (
    rowIndex: number,
    columnIndex: number
  ): boolean => {
    let columnToStartFrom: number = columnIndex;
    let consecutiveTiles: number = 0;
    let rowToStartFrom: number = rowIndex;
    for (let i: number = 0; i < 6; i++) {
      let column: IColumn = board.rows[rowIndex - i]?.columns[columnIndex + i];
      if (column) {
        columnToStartFrom = columnIndex + i;
        rowToStartFrom = rowIndex - i;
      } else {
        break;
      }
    }
    for (let j: number = 0; j < 6; j++) {
      let column: IColumn =
        board.rows[rowToStartFrom + j]?.columns[columnToStartFrom - j];
      if (column) {
        if (
          column.player === board.rows[rowIndex].columns[columnIndex].player
        ) {
          consecutiveTiles++;
          if (consecutiveTiles >= 4) {
            return true;
          }
        } else {
          consecutiveTiles = 0;
        }
      }
    }
    return false;
  };
  const checkDiagonalRight = (
    rowIndex: number,
    columnIndex: number
  ): boolean => {
    let consecutiveTiles: number = 0;
    let indexDifference: number = rowIndex - columnIndex;
    let rowToStartFrom: number = 0;
    let columnToStartFrom: number = 0;
    if (indexDifference > 0) {
      rowToStartFrom = indexDifference;
    } else if (indexDifference !== 0) {
      columnToStartFrom = Math.abs(indexDifference);
    }
    for (let i: number = 0; i < 6; i++) {
      let column =
        board.rows[rowToStartFrom + i]?.columns[columnToStartFrom + i];
      if (column) {
        if (
          column.player === board.rows[rowIndex].columns[columnIndex].player
        ) {
          consecutiveTiles++;
          if (consecutiveTiles >= 4) {
            return true;
          }
        } else {
          consecutiveTiles = 0;
        }
      }
    }
    return false;
  };
  const checkVertical = (rowIndex: number, columnIndex: number): boolean => {
    let row: IRow = board.rows[rowIndex];
    let consecutiveRows: number = 0;
    for (let r: number = 0; r < 6; r++) {
      if (
        board.rows[r].columns[columnIndex].player ===
        row.columns[columnIndex].player
      ) {
        consecutiveRows++;
        if (consecutiveRows >= 4) {
          return true;
        }
      } else {
        consecutiveRows = 0;
      }
    }
    return false;
  };
  const checkHorizontal = (rowIndex: number, columnIndex: number): boolean => {
    let row: IRow = board.rows[rowIndex];
    let consecutiveColumns: number = 0;
    for (let c: number = 0; c < 7; c++) {
      if (row.columns[c].player === row.columns[columnIndex].player) {
        consecutiveColumns++;
        if (consecutiveColumns >= 4) {
          return true;
        }
      } else {
        consecutiveColumns = 0;
      }
    }
    return false;
  };

  
  return (
    <div className={styles.wrapper}>
      
      <table>
        <thead></thead>
        <tbody>
          {board.rows.map(
            (row: IRow, i: number): JSX.Element => (
              <Row key={i} row={row} updateBoard={updateBoard} />
            )
          )}
        </tbody>
        <div className={styles.mr}></div>
      </table>
      <Turn currPlayer={currPlayer} timer={timeLeft} winner={winner} playAgain={playAgain}/>
    </div>
    
  )
}

export default Board