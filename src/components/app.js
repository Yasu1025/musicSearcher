import React from 'react'

export class MyComponent extends React.Component{
    // Mrthod
    Hello = () =>{
        return "Hello"
    } 

    render(){
        return(
            <div className="classname">
                <p>
                    {this.Hello()} {this.props.myPrps}
                </p>
            </div>
        )
    }
}

// Stateless functional Component
export const MyComponent2 = ({greeting}) => (
    <div>
        <p>{greeting}</p>
    </div>
)

