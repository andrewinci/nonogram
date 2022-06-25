import './main.css'
import { Nonogram, CellStatus } from './model'
import Table from './table'

class NonogramGame {

    generate(size: number): Nonogram {
        const res = Array(size).fill(0).map(() => Array(size).fill(0).map(() => this.randBoolean()))
        const rowHeader = res.map(row => this.generateHeader(row))
        const colHeader = []

        for (let i = 0; i < res.length; i++) {
            colHeader.push(this.generateHeader(res.map(row => row[i])))
        }

        return {
            expected: res.map(r => r.map(c => c ? CellStatus.Full : CellStatus.Empty)),
            body: res.map(r => r.map(() => CellStatus.Empty)),
            rowHeader: rowHeader,
            columnHeader: colHeader
        }
    }

    randBoolean(): boolean {
        return Math.random() >= 0.4;
    }

    private generateHeader(cells: boolean[]) {
        let header = [0]
        for (const c of cells) {
            if (c) header[header.length - 1] += 1
            else if (header[header.length - 1] != 0) header.push(0)
        }
        // remove last 0 if any
        if (header[header.length - 1] == 0) header.pop()
        return header
    }

}

const game = new NonogramGame()
const nonogram = game.generate(5)

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