import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFile, removeFile } from './actions';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }

    _handleFileUpload = files => {
        this.setState({
            files: [...this.state.files, ...files]
        });

        this.props.dispatch(addFile(files));
    }

    _removeFile(fileName) {
        this.setState({
            files: this.state.files.filter((file) => { return file.name !== fileName; })
        });
    }

    renderList() {
        return this.state.files.map((file, index) => {
            return (

                <li key={index} className="collection-item">
                    <div>
                        {file.name}
                        <a onClick={ () => this._removeFile(file.name)} className="secondary-content" style={{cursor:'pointer'}}>
                            <i className="material-icons">remove_circle_outline</i>
                        </a>
                    </div>
                </li>
            )
        })
    }


  render() {
    return (
        <div className="container">
            <form action="#">
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" multiple onChange={(event) => this._handleFileUpload(event.target.files)} />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                  </div>
                </div>
              </form>

            <br />
            <div className="file-list" style={{ display: (this.state.files.length > 0 ? 'block' : 'none') }}>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>File Names</h4></li>
                    { this.renderList() }
                  </ul>
            </div>

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
