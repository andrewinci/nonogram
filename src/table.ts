import { CellStatus, Nonogram } from "./model"

const CLASS_NUM_CELL = "num-cell"
const CLASS_FULL_CELL = "full-cell"
const CLASS_CROSS_CELL = "cross-cell"
const CLASS_EMPTY_CELL = "empty-cell"

export default class Table {
    htmlTable: HTMLTableElement

    constructor(htmlTableId: string, public onClick: (r: number, c: number, primary: boolean) => void) {
        // retrieve the table container
        this.htmlTable = document.getElementById(htmlTableId) as HTMLTableElement
        if (!this.htmlTable)
            throw new Error("Table element not found")
    }

    clean() {
        this.htmlTable.children[0].remove()
    }

    draw(columnHeader: number[][], rowHeader: number[][], body: CellStatus[][]) {
        // check nonogram consistency
        if (columnHeader.length != rowHeader.length)
            throw new Error("Inconsistent nonogram table")
        // cleanup any table content
        this.clean()
        // add table body
        const tableBody = document.createElement('tbody')
        this.htmlTable.appendChild(tableBody)
        // add the columns header
        const headerSize = Math.max(...columnHeader.map(h => h.length))
        tableBody.appendChild(this.buildRow([''].concat(
            columnHeader.map(col => {
                const numbers = col.map(n => n.toString())
                return Array(headerSize - numbers.length)
                    .fill('')
                    .concat(numbers)
                    .join('<br>')
            })
        )))
        // add the body
        for (let i = 0; i < rowHeader.length; i++) {
            let rowContent: (string | CellStatus)[] = [rowHeader[i].map(n => n.toString()).join(' ')]
            tableBody.appendChild(
                this.buildRow(rowContent.concat(body[i]), i + 1)
            )
        }
    }

    buildRow(content: (string | CellStatus)[], rowIndex: number = 0): HTMLTableRowElement {
        const row = document.createElement('tr')
        content.forEach((content, colIndex) => {
            const td = document.createElement('td')
            // no need to capture click on the headers
            if (rowIndex != 0 && colIndex != 0) {
                td.addEventListener('click', () => this.onClick(rowIndex, colIndex, true))
                td.addEventListener('contextmenu', (e) => {
                    this.onClick(rowIndex, colIndex, false)
                    e.preventDefault();
                })
            }
            if (typeof content === 'string') {
                td.classList.add(CLASS_NUM_CELL)
                td.innerHTML = content
            }
            else {
                switch (content) {
                    case CellStatus.Cross:
                        td.classList.add(CLASS_CROSS_CELL)
                        //todo: support
                        break
                    case CellStatus.Empty:
                        td.classList.add(CLASS_EMPTY_CELL)
                        break
                    case CellStatus.Full:
                        td.classList.add(CLASS_FULL_CELL)

                        break
                }

            }
            row.appendChild(td)
        })
        return row
    }

}