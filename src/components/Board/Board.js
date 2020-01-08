import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Cell from '../Cell/Cell.js'
export default class Board extends Component {

    static propTypes = {
        cellValues: PropTypes.array.isRequired
    }


    render() {

        const items = []


        for (var i = 0; i < 81; i++) {
            items.push(<Cell
                key={i}
                cellIndex={i}
                cellValue={this.props.cellValues[i]}
                setCellValue={this.props.setCellValue}/>)

        }

        return (<div className={"board"}>
            {items}
        </div>)
    }
}


