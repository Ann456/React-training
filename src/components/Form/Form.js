import { nanoid } from 'nanoid';
const { Component } = require("react");


class Form extends Component{
    state = {
        name: '',
        number: '',
        experience: 'junior',
        licence: false,
    }

    nameId = nanoid();
    numberId = nanoid();
    level = nanoid();

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    handleChange = e => {
        this.setState(() => ({
            [e.target.name]: e.target.value,
        }))
   
    }

    handleLicenceChange = e => {
        console.log(e.target.checked)

        this.setState({
            licence: e.target.checked,
        })
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>Name</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                    id={this.nameId}
                >
                </input>

                <label htmlFor={this.numberId}>Number</label>
                <input
                    type="tel"
                    onChange={this.handleChange}
                    name="number"
                    value={this.state.number}
                    id={this.numberId}
                > 
                </input>

                <p>Your level</p>
                <label htmlFor={this.levelJunior}>Junior</label>
                <input
                    type="radio"
                    name="experience"
                    value="junior"
                    id={this.levelJunior}
                    onChange={this.handleChange}
                    checked={this.state.experience==="junior"}
                />
                <label> Middle
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience==="middle"}
                    />
                </label>
                <label> Senior
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience==="senior"}
                    />
                </label>
                
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.handleLicenceChange}

                    />
                    I'm agree with conditions
                </label>
                <button type="submit" disabled={!this.state.licence}>Submit</button>
            </form>
        )
    }
};

export default Form;