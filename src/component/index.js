import React from 'react';
import ReactDOM from 'react-dom';
import '../style/index.css';

import Artists from './component/Artists';

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Artists />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
