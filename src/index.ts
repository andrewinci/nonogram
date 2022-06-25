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

class NonogramGame {
    generate(size: number): Nonogram {
        const res = Array(size).fill(0).map(() => Array(size).fill(0).map(() => this.randBoolean()))
        return {
            body: res.map(r => r.map(c => c ? CellStatus.Full : CellStatus.Empty)),
            rowHeader: Array(size).fill(0).map(() => [0]),
            columnHeader: Array(size).fill(0).map(() => [0])
        }
    }

    randBoolean(): boolean {
        return Math.random() >= 0.5;
    }
}

const game = new NonogramGame()
const gameBody = game.generate(10)
const table = new Table("nonogram", (r, c) => {
    gameBody.body[r - 1][c - 1] = CellStatus.Full
    table.draw(gameBody)
})
table.draw(gameBody)