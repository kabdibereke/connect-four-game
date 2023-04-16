import React from 'react'
import { IColumn } from '../../interface/interface';
import styles from './Board.module.scss'
interface TileProps {
    columnIndex: number;
    column: IColumn;
    updateBoard: (columnIndex: number) => void;
  }

const Tile = ({columnIndex, updateBoard,column}: TileProps) => {
    let tileStatus = "open";

    if (column.player === 1) {
      tileStatus = "player1";
    } else if (column.player === 2) {
      tileStatus = "player2";
    }
  
    return (
      <td>
        <div className={styles.tile} onClick={() => updateBoard(columnIndex)}>
          <div className={tileStatus == "open"? styles.open: tileStatus == "player1" ? styles.player1 : styles.player2}></div>
        </div>
      </td>
    );
}

export default Tile