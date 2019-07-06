import React from 'react'

export default class Users  extends React.Component{
    render(){
        return (
            <div>
                Users {this.props.params.id}
            </div>
        )
    }
}