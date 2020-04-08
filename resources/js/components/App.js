import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from "./Board";

class App extends React.Component {
    render() {
        return (
            <div>
                <Board/>
            </div>
        );
    }
}

export default App;

if (document.getElementById('react-app')) {
    ReactDOM.render(<App/>, document.getElementById('react-app'));
}
