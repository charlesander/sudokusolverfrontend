import React from "react";
import Board from "./Board"
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure, mount} from 'enzyme';

configure({adapter: new Adapter()});

describe("Board component", () => {

    it('renders Board ok', () => {
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

        const board = mount(<Board
            cellValues={cellValues}
            setCellValue={setCellValue}
        />);

        let firstDiv = board.find('div').at(1);
        expect(firstDiv.hasClass('cell')).toEqual(true);
        expect(firstDiv.hasClass('preset')).toEqual(true);
        expect(firstDiv.text()).toEqual("1");

        let secondDiv = board.find('div').at(2);
        expect(secondDiv.hasClass('cell')).toEqual(true);
        expect(secondDiv.hasClass('settable')).toEqual(true);

        expect(secondDiv.text()).toEqual("0");

        let eleventhDiv = board.find('div').at(11);
        expect(eleventhDiv.hasClass('cell')).toEqual(true);
        expect(eleventhDiv.hasClass('preset')).toEqual(true);
        expect(eleventhDiv.text()).toEqual("2");

        let div80 = board.find('div').at(80);
        expect(div80.hasClass('cell')).toEqual(true);
        expect(div80.hasClass('settable')).toEqual(true);
        expect(div80.text()).toEqual("0");

        let div81 = board.find('div').at(81);
        expect(div81.hasClass('cell')).toEqual(true);
        expect(div81.hasClass('preset')).toEqual(true);
        expect(div81.text()).toEqual("9");
    });
});