const { Component } = require("react");

class TodoEditor extends Component {
    state = {
        message: '',
    };

    handleChange = e => {
        this.setState(() => ({
            [e.target.name]: e.target.value,
        }))
   
    }

    // handleChange = e => {
    //     this.setState({
    //         massage: e.currentTarget.value,
    //     });
    // };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state.message);
        this.setState ({
            message: '',
        })
    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.message}
                    onChange={this.handleChange}
                    name="message"
                ></input>

                <button type="submit">Save</button>
            </form>  
            );
        };
}

export default TodoEditor;