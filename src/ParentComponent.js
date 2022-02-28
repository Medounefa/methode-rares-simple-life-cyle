import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import PureCompo from './PureComponent'
import FunctionComp from './FunctionComp'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : 'SpiderMan'
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate decide TRUE');

        // console.log(this.state.name);
        // console.log(nextState);

        // if(this.state.name !== nextState.name){
        //     return true;
        // }

        return true;
    }

    changeToBatman = () =>{
       this.setState({
           name : 'Batman'
       })
    } 
    
    
    render() {

        console.log('%c RENDER() DU COMPOSANT PARENT','color:red;')
        return (
            <div>
            <p>
              <span className='red'>Parent Component : </span>
              {this.state.name}
            </p>
                <SimpleComponent name={this.state.name}/>
                <PureCompo name={this.state.name}/>
                <FunctionComp name={this.state.name}/>

                <button onClick={this.changeToBatman}>Changer en batMan</button>
            </div>
        )
    }
}

export default ParentComponent
