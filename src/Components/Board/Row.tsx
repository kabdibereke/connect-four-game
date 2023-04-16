import React from 'react'
import { IRow } from '../../interface/interface';
import { IColumn } from '../../interface/interface';
import Tile from './Tile';

type RowProps = {
    row: IRow;
    updateBoard: (columnIndex: number) => void;
}

const Row = ({ row, updateBoard}: RowProps) => {
    return (
        <tr>
          {row.columns.map(
            (column: IColumn, i: number): JSX.Element => (
              <Tile key={i} column={column} columnIndex={i} updateBoard={updateBoard}/>
            )
          )}
        </tr>
        );
}

export default Row