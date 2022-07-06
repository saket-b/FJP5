//rcc -> react class component

import React, { Component } from 'react'

export default class Todo extends Component {


    constructor(){
        super();
        this.state={
            tasks :[
                // {id : 1, task :"Revise JS"},
                // {id : 2, task : "Revise DSA level 1"},
            ]
        };
    }

    handleChange= (e)=>{
        console.log(e.target.value);
        this.setState({
            curTask: e.target.value,
        })
    }

    handleSubmit =() =>{
        this.setState({
            tasks:[...this.state.tasks, {task:this.state.curTask, id: this.state.tasks.length+1}],
            curTask:"",
        })
    }

    handleDeleteTasks =(id)=>{
            let narr=[];
            narr = this.state.tasks.filter((taskObj) =>{
                return taskObj.id !== id
            })

            
            this.setState({
                tasks:[...narr]
            })

        
    }

  render() {
    return (
    //   <div>Todo</div>
<div>
    <input type="text" value ={this.state.curTask}
     onChange={ this.handleChange}/>
    <button onClick={this.handleSubmit}>Submit</button>

    { //use whne need to write JS in jsx
    // arrow function take parent this so,
    // this.handleDelete parent mean window
        this.state.tasks.map((taskObj) => {
            return(
                <li key ={taskObj.id}>
                <p> {taskObj.task}</p>
                <button onClick={()=> this.handleDeleteTasks(taskObj.id) }>Delete</button>
                </li>
            )
    })
   } 
  </div>
  )
}


}
