import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {num1to9} from './../utils/index'
export default class Cell extends Component {

    static MIN = 0;
    static MAX = 9;

    static propTypes = {
        cellIndex: PropTypes.number.isRequired,
        cellValue: num1to9,
        setCellValue: PropTypes.func.isRequired
    }

    render() {

        return (<div
            className={"cell " + (this.props.cellValue ? "preset" : "settable")}
            key={this.props.cellIndex}
            onClick={this.props.setCellValue.bind(this, this.props.cellIndex)}>{this.props.cellValue}</div>)
    }
}