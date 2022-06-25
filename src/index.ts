import './main.css'
import { Nonogram, CellStatus } from './model'
import Table from './table'

const sample: Nonogram = {
    columnHeader: [[1, 2, 3], [3, 3], [6]],
    rowHeader: [[6], [3, 4], [2]],
    body: [
        [CellStatus.Cross, CellStatus.Empty, CellStatus.Full],
        [CellStatus.Empty, CellStatus.Full, CellStatus.Cross],
        [CellStatus.Cross, CellStatus.Empty, CellStatus.Full]]
}

new Table("nonogram", sample)