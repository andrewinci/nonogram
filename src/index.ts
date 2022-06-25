import './main.css'
import { CellStatus } from './model'
import { NonogramGame } from './nongram'
import Table from './table'


const game = new NonogramGame()

function getSize(): number {
    const res = (document.getElementById('size-input') as HTMLInputElement).value
    return Number.parseInt(res, 10)
}

var nonogram = game.generate(getSize())

document.getElementById('generate-button').addEventListener('click', () => {
    nonogram = game.generate(getSize())
    table.draw(nonogram.columnHeader, nonogram.rowHeader, nonogram.body)
})

const hintButton = document.getElementById('hint-button')
hintButton?.addEventListener('mousedown', () => {
    table.draw(nonogram.columnHeader, nonogram.rowHeader, nonogram.expected)
})
hintButton?.addEventListener('mouseup', () => {
    table.draw(nonogram.columnHeader, nonogram.rowHeader, nonogram.body)
})

const table = new Table("nonogram", (r, c, primary) => {
    if (nonogram.body[r - 1][c - 1] != CellStatus.Empty)
        nonogram.body[r - 1][c - 1] = CellStatus.Empty
    else
        nonogram.body[r - 1][c - 1] = primary ? CellStatus.Full : CellStatus.Cross

    table.draw(nonogram.columnHeader, nonogram.rowHeader, nonogram.body)
})
table.draw(nonogram.columnHeader, nonogram.rowHeader, nonogram.body)