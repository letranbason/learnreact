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

    handleChangename = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return(
            <>
            <div>{this.context.age}</div>
            <div>
            {this.props.name} {this.props.years} {this.props.age}
            </div>
            <div className="begin1">hello age form {this.state.age}</div>
            <div>hello years form {this.state.years}</div>

            <button className="button" onClick={() => this.handleonclick()}>
            click
            </button>

            <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please login</h2>
                <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangename}
                />
                <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required=""
                />

                <button class="btn btn-lg btn-primary btn-block" type="submit">
                    Login
                </button>
            </form>
            </div>
                
            </>
            
        )
    }
}

export default Fit;