import { CellStatus, Nonogram } from "./model"

const CLASS_NUM_CELL = "num-cell"
const CLASS_FULL_CELL = "full-cell"
const CLASS_CROSS_CELL = "cross-cell"
const CLASS_EMPTY_CELL = "empty-cell"

export default class Table {
    htmlTable: HTMLTableElement

    constructor(htmlTableId: string) {
        // retrieve the table container
        this.htmlTable = document.getElementById(htmlTableId) as HTMLTableElement
        if (!this.htmlTable)
            throw new Error("Table element not found")
    }

    clean() {
        this.htmlTable.children[0].remove()
    }

    draw(nonogram: Nonogram) {
        // check nonogram consistency
        if (nonogram.columnHeader.length != nonogram.rowHeader.length)
            throw new Error("Inconsistent nonogram table")
        // cleanup any table content
        this.clean()
        // add table body
        const tableBody = document.createElement('tbody')
        this.htmlTable.appendChild(tableBody)
        // add the columns header
        tableBody.appendChild(this.buildRow([''].concat(
            nonogram.columnHeader.map(col => col.map(n => n.toString()).join('<br/>'))
        )))
        // add the body
        for (let i = 0; i < nonogram.rowHeader.length; i++) {
            let rowContent: (string | CellStatus)[] = [nonogram.rowHeader[i].map(n => n.toString()).join(' ')]
            tableBody.appendChild(
                this.buildRow(rowContent.concat(nonogram.body[i]))
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
                        //todo: support
                        break
                    case CellStatus.Empty:
                        td.classList.add(CLASS_EMPTY_CELL)
                        td.addEventListener('click', (e) => {
                            td.classList.remove(CLASS_EMPTY_CELL)
                            td.classList.add(CLASS_FULL_CELL)
                        })
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