export interface IBoard {
    rows: IRow[]
}

export interface IColumn {
    player: number
}

export interface IRow {
    columns: IColumn[]
}