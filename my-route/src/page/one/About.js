import React from 'react'
export default class About extends React.Component{
    constructor(props){
        super(props);
        // mixins: [ Lifecycle ];
        // console.log(this)
    }
    // componentDidMount() {
    //     console.log(this)
    //     this.props.router.setRouteLeaveHook(this.props.routes[0], this.routerWillLeave)
    // }
    // routerWillLeave(nextlocation) {
    //     console.log('router will go to ',nextlocation)       
    //     return 'confirm to leave ?' 
    // }
    render(){
        return (
            <div>about</div>
        )
    }
}