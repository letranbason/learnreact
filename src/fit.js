import React from "react";
import './fit.css';

class Fit extends React.Component{

    state = {
        name: 'Son',
        age: '22',
        years: '2001'
    }
    handleonclick = () =>{
        alert('learn react')
    }

    render(){
        return(
            <>
                <div className="begin">hello world form {this.state.name}</div>
                <div className="begin1">hello age form {this.state.age}</div>
                <div>hello years form {this.state.years}</div>

                <button className="button" onClick={()=> this.handleonclick()}> click</button>
            </>
            
        )
    }
}

export default Fit;