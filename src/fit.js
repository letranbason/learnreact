import React from "react";

class Fit extends React.Component{

    state = {
        name: 'Son',
        age: '18',
        years: '2001'
    }


    render(){
        return(
            <>
                <div>hello world form {this.state.name}</div>
                <div>hello age form {this.state.age}</div>
                <div>hello years form {this.state.years}</div>
            </>
            
        )
    }
}

export default Fit;