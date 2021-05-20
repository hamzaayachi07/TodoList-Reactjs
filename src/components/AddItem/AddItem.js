import React, { Component } from 'react';
import "./AddItem.css"

class AddItem extends Component {
    state = {
        name: "",
        age:""
    }

    hundleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    hundleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name : '',
            age : ''
        })
    }
    
    
    render() { 
        return (  
            <div>
                <form onSubmit={this.hundleSubmit}>
                <input type="text" placeholder="Enter name..." id="name" onChange={this.hundleChange} value={this.state.name} />
                <input type="age" placeholder="Enter age..." id="age" onChange={this.hundleChange} value={this.state.age} />
                <input type="submit" value="Add"/>
                </form>  
            </div>
        );
    }
}
 
export default AddItem;