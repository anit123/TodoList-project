import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
 //git hub setup

class App extends Component {
  state={
    items:[{ id:1, title:'Wake up', },{ id:2, title:'Make breakfast', } ],
    id:uuid(),
    item:'',
    editItem:'false'
  };
  handleChange=(e)=>{
    console.log('handle Change')
  };
  handleSubmit=(e)=>{
    console.log('handle Submit')
  };
  clearList=()=>{
    console.log('Clear List')
  };
  handleDelete=(id)=>{
    console.log(`handle edit${id}`)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalized text-center"> Todo Input</h3>
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem={this.state.editItem}
            />
            <TodoList 
            item={this.state.item} 
            clearList={this.clearList} 
            handleDelete={this.handleDelete} 
            handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App

