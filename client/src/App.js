import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFile, removeFile } from './actions';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(addFile('first file'));
    }

    _handleFileUpload = (event, xx) => {
        console.log(event, xx);
        this.props.dispatch(addFile('Testing'));
    }
  render() {
    return (
        <div className="App">
            <input type="file" id="fileInput" multiple onChange={(event) => this._handleFileUpload(event.target.files, 'aaa')} />
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        files: state.files
    }
}

// const mapDispatchToProps = {
//     addFile,
//     removeFile,
// };

export default connect(mapStateToProps, dispatch => ({dispatch}))(App);
// export default App;
