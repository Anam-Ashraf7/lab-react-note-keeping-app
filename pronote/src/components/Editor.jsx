import { Component } from 'react'
import './Editor.css'

class Editor extends Component {

    constructor(props) {
      super(props)

      this.handleChange = this.handleChange.bind(this);
    
      this.state = {
        value: ''
      }
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    render() {
        return (
        <div className='container'>
            <h1 id='title'>NoteBook App</h1>
            <div className='flex'>
                <div className='input'>
                    <h3>Input</h3>
                    <textarea onChange={this.handleChange} defaultValue={this.state.value}></textarea>
                </div>
                <div className='pro-note'>
                    <h3>Pro Note</h3>
                    <div id='content'>{this.state.value}</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Editor