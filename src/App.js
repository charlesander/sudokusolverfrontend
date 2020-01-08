import React from 'react';
import Axios from 'axios'
import './App.css';
import Header from './components/layout/Header.js'
import Board from './components/Board/Board.js'

class App extends React.Component {

    state = {
        cellValues: [
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    setCellValue = (cellIndex) => {
        let tmpCellValues = this.state.cellValues;

        if (tmpCellValues[cellIndex] < 9) {
            tmpCellValues[cellIndex]++;
        } else {
            tmpCellValues[cellIndex] = 0;
        }
        this.setState({cellValues: tmpCellValues});
        console.log(this.state.cellValues);
    }

    onClick = (e) => {
        e.preventDefault();
        Axios.get('http://127.0.0.1:8000/solve', {
            params: {
                cellValues: this.state.cellValues
            }
        }).then(res => this.setState({cellValues: res.data}))
    }

    render() {
        return (
            <div className="App">
                <Header />
                <button onClick={this.onClick}>test</button>
                <Board
                    cellValues={this.state.cellValues}
                    setCellValue={this.setCellValue}
                />
            </div>
        );
    }
}

export default App;
