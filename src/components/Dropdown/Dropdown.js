import s from './Dropdown.module.css';
const { Component } = require("react");

class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState((prevState) => ({
            visible: !prevState.visible,
        }))
    }

    // show = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    // hide = () => {
    //     this.setState({
    //         visible: false,
    //     })
    // }

    render() {
        return (
            <div>
                <button
                    type="button"
                    className={s.toggle}
                    onClick={this.toggle}
                >
                 {this.state.visible ? "Hide" : "Show"}  
                </button>

                <button
                    type="button"
                    className={s.toggle}
                    onMouseOver={this.toggle}
                >
                 {this.state.visible ? "Hide MouseOver" : "Show MouseOver"}  
                </button>

                {this.state.visible && (
                    <div className={s.menu}>Выпадающие меню</div>
                )}
                
            </div>
        );
    }
}

export default Dropdown;