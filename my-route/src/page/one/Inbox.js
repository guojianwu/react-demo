import React from 'react'

export default class Inbox  extends React.Component{
    render(){
        return (
            <div>
                Inbox 
                <div>
                   {this.props.children}
                </div>
            </div>
        )
    }
}