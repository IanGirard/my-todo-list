import React, { Component } from 'react';
import '../App.css';

export default class TodoItem extends Component {
    constructor(props) {
      super(props);

      this.state = {
          disabled: false,
      }

      this.markCompleted = this.markCompleted.bind(this);
      this.deleteItem = this.deleteItem.bind(this);

    }
    markCompleted(event) {
      this.props.onItemCompleted(this.props.id);
      this.setState({
        disabled: true,
    })
    }
    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
      this.setState({
          disabled: true,
      })
    }

    disableButton(){
        this.setState({
            disabled: true
        })
    }



    render() {
      var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
      return (
        <li className={itemClass} ref={li => this._listItem = li }>
        {/* {this.state.disabled.toString()} gjasdgfusgdui */}
          <label className="form-check-label">
            <button type="button" className={this.state.disabled ? "dimmed" : ""} onChange={this.markCompleted} onClick={() => this.disableButton()} disabled={this.state.disabled}/> 
            <p className={this.state.disabled ? "dimmed" : ""}>{this.props.text}</p>
          </label>
          <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
        </li>
      );
    }
  }