import React from "react";
import Cell from "./Cell"
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure, mount} from 'enzyme';

configure({adapter: new Adapter()});

describe("Cell component", () => {

    it('renders settable Cell ok', () => {
        let i = 0
        let cellValue = 0
        let setCellValue = () => true
        const cell = mount(<Cell
            key={i}
            cellIndex={i}
            cellValue={cellValue}
            setCellValue={setCellValue}/>);
        expect(cell.text()).toEqual(cellValue.toString());
        expect(cell.find('div').hasClass('cell')).toEqual(true);
        expect(cell.find('div').hasClass('settable')).toEqual(true);

    });

    it('renders preset Cell ok', () => {
        let i = 0
        let cellValue = 1
        let setCellValue = () => true
        const cell = mount(<Cell
            key={i}
            cellIndex={i}
            cellValue={cellValue}
            setCellValue={setCellValue}/>);
        expect(cell.text()).toEqual(cellValue.toString());
        expect(cell.find('div').hasClass('cell')).toEqual(true);
        expect(cell.find('div').hasClass('preset')).toEqual(true);

    });

})