import React from "react";
import { create } from "react-test-renderer";
import Board from "./Board"

describe("Board component", () => {
    test("Matches the snapshot", () => {
        let cellValues = [
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0]
        let setCellValue = () => true

        const board = create(<Board
            cellValues={cellValues}
            setCellValue={setCellValue}
        />);
        expect(board.toJSON()).toMatchSnapshot();
    });
})

describe("Board component", () => {
    test("Matches the snapshot", () => {
        let cellValues = [
            1, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 3, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 4, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 5, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 6, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 7, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 8, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 9]
        let setCellValue = () => true

        const board = create(<Board
            cellValues={cellValues}
            setCellValue={setCellValue}
        />);
        expect(board.toJSON()).toMatchSnapshot();
    });
})