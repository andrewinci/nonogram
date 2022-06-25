export enum CellStatus {
    Empty, Full, Cross
}

export interface Nonogram {
    columnHeader: number[][]
    rowHeader: number[][]
    body: CellStatus[][]
}