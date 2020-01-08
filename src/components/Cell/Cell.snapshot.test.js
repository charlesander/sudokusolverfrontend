import React from "react";
import { create } from "react-test-renderer";
import Cell from "./Cell"

describe("Cell component", () => {
    test("Matches the snapshot", () => {
        let i = 0
        let cellValue = 0
        let setCellValue = () => true
        const cell = create(<Cell
            key={i}
            cellIndex={i}
            cellValue={cellValue}
            setCellValue={setCellValue}/>);
        expect(cell.toJSON()).toMatchSnapshot();
    });
})