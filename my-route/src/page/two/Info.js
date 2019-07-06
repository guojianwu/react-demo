import React from 'react'

export default class Info  extends React.Component{
    render(){
        return (
            <div>
                Info
                {this.props.children}
            </div>
        )
    }
}