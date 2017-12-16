import React from 'react'

export default class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            cpt: 20
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({ cpt : this.state.cpt + 1 })
    }

    render() {

        return(
            <div>
                Hello ssdsdfds  { this.props.name } ! 
                <br/>
                { this.state.cpt >= 13 && <div> + de 10 </div>} <br/>
                CPT = { this.state.cpt } <br/>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}