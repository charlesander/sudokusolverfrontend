import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Cell extends Component {

    static propTypes = {
        cellIndex: PropTypes.number.isRequired,
        cellValue: PropTypes.number.isRequired,
        setCellValue: PropTypes.func.isRequired
    }

    render() {

        return (<div
            className={"cell " + (this.props.cellValue ? "preset" : "settable")}
            key={this.props.cellIndex}
            onClick={this.props.setCellValue.bind(this, this.props.cellIndex)}>{this.props.cellValue}</div>)
    }
}