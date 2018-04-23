import React from 'react';

export default class City extends React.Component{
    constructor(props){
        super(props);
        this.addCity = this.addCity.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    componentWillMount(){
        this.props.clear();
    }
    addCity(e){
        e.preventDefault();
        this.props.add(e.target.innerHTML);
        console.log('e.target.innerHTML: ', e.target.innerHTML);
    }
    toggle(){
        this.props.toggle();
    }
    render(){
        return(
            <div id="main" >
                <h5>Choose a City </h5>
                <h3 onClick={this.addCity}>Bangalore</h3>
                <h3 onClick={this.addCity}>Chennai</h3>
                <h3 onClick={this.addCity}>Mumbai</h3>
                <h3 onClick={this.addCity}>Delhi</h3>
                <h4>OR</h4>
                <h3 id="try" onClick={this.toggle}>Try Auto Location</h3>
            </div>
        );
    }
}