import { CellStatus, Nonogram } from "./model"

const CLASS_NUM_CELL = "num-cell"
const CLASS_FULL_CELL = "full-cell"
const CLASS_CROSS_CELL = "cross-cell"
const CLASS_EMPTY_CELL = "empty-cell"

export default class Table {
    htmlTable: HTMLTableElement

    constructor(htmlTableId: string, public nonogram: Nonogram) {
        // check nonogram consistency
        if (nonogram.columnHeader.length != nonogram.rowHeader.length)
            throw new Error("Inconsistent nonogram table")
        // retrieve the table container
        this.htmlTable = document.getElementById(htmlTableId) as HTMLTableElement
        if (!this.htmlTable)
            throw new Error("Table element not found")
        // cleanup any table content
        this.clean()
        // build the table
        this.build()
    }

    clean() {
        this.htmlTable.children[0].remove()
    }

    build() {
        // add table body
        const tableBody = document.createElement('tbody')
        this.htmlTable.appendChild(tableBody)
        // add the columns header
        tableBody.appendChild(this.buildRow([''].concat(
            this.nonogram.columnHeader.map(col => col.map(n => n.toString()).join('<br/>'))
        )))
        // add the body
        for (let i = 0; i < this.nonogram.rowHeader.length; i++) {
            let rowContent: (string | CellStatus)[] = [this.nonogram.rowHeader[i].map(n => n.toString()).join(' ')]
            tableBody.appendChild(
                this.buildRow(rowContent.concat(this.nonogram.body[i]))
            )
        }
    }

    buildRow(content: (string | CellStatus)[]): HTMLTableRowElement {
        const row = document.createElement('tr')
        content.forEach(c => {
            const td = document.createElement('td')
            if (typeof c === 'string') {
                td.classList.add(CLASS_NUM_CELL)
                td.innerHTML = c
            }
            else {
                switch (c) {
                    case CellStatus.Cross:
                        td.classList.add(CLASS_CROSS_CELL)
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