import {Container} from 'react-bootstrap'

import React, { Component } from 'react'

class Class extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        // console.log("constructor")
    }

    componentDidMount(){
        // fetch data dari API
        setTimeout(()=>{
            console.log("componentDidMount")
            this.setState({counter: this.state.counter + 1})
        },3000)
    }

    componentDidUpdate(){
        // Merespon jika ada perubahan data props atau state
        console.log("componentDidUpdate")
    }


    render() {
        // console.log("render")
        return (
            <Container>
                Counter: {this.state.counter}
                {this.state.counter === 0 && <ClassSecond />}
            </Container>
        )
    }
}

class ClassSecond extends Component{

    componentWillUnmount(){
        //Jika Component dilepas
        console.log("componentWillUnmount")
    }

    render() {
        return (
            <div>
                ClassSecond
            </div>
        )
    }
}

export default Class
