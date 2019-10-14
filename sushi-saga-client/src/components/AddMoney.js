import React from 'react';

class AddMoney extends React.Component {

    // state = {
    //     wallet: 0
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.wallet)
    //     console.log(this.props)
    //     document.getElementById("money-form").reset();
    // }

    // handleChange = (event) => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         wallet: event.target.value
    //     })
    // }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit} id="money-form" className="form">
            <label>
            <h3>Add Money:</h3>
            <input type="number" onChange={this.props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default AddMoney;