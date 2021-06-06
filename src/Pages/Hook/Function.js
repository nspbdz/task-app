import {useEffect, useState} from 'react'

import {Container} from 'react-bootstrap'

function Function() {

    const [counter, setCounter] = useState(0)
    const [state, setState] = useState("basdkasjd")

    useEffect(()=>{
        setTimeout(()=>{
            console.log("componentDidMount")
            setCounter(counter + 1)
            setState("0000")
        },3000)
    },[])

    useEffect(()=>{
        if(counter !== 0){
            console.log("componentDidUpdate")
        }
    },[state])


    return (
        <Container>
            Counter : {counter}
            {counter === 0 && <FunctionSecond />}
        </Container>
    )
}

function FunctionSecond (){

    useEffect(()=>{
        return (
            ()=> console.log("componentWillUnmount")
        )
    },[])

    return (
        <div>
            FunctionSecond
        </div>
    )
}

export default Function
