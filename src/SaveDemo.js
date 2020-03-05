import React from 'react'

class SaveDemo extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        age:''
    }

    save =()=> {
        let data_to_save = JSON.stringify(this.state);
        // We use setItem to save to localStorage
        localStorage.setItem('saved', data_to_save)
    }

    load = () => {
        let loaded_data = localStorage.getItem('saved');
        let loaded_state = JSON.parse(loaded_data);
        this.setState(loaded_state);
    }

    clear = () => {
        localStorage.removeItem('saved')
    }

    onUpdateTextField = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return <div>
            <div>
                <label>First Name</label>
                <input type='text' name='first_name' onChange={this.onUpdateTextField} value={this.state.first_name}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' name='last_name' onChange={this.onUpdateTextField} value={this.state.last_name}/>
            </div>
            <div>
                <label>Age</label>
                <input type='text' name='age' onChange={this.onUpdateTextField} value={this.state.age}/>
            </div>
            <button onClick={this.save}>Save</button>
            <button onClick={this.load}>Load</button>
            <button onClick={this.clear}>Clear</button>
        </div>
    }

}

export default SaveDemo;