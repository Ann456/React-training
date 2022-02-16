import { Component } from 'react';
import className from 'classnames';//npm i classnames //https://bundlephobia.com/package/classnames@2.3.1
import s from './ColorPicker.module.css';
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeIndex: 0,
    };

    setActivIndex = index => {
        console.log('Click');
        this.setState({
            activeIndex: index
        });
    }

    makeOptionName = index => {
        return className('ColorPicker__option', {
            'ColorPicker__option--active': index === this.state.activeIndex,
        });

        // const optionClasses = ['ColorPicker__option'];

        // if (index === this.state.activeIndex) {
        //     optionClasses.push('ColorPicker__option--active');
        // }

        // return optionClasses.join(' ');
    };

    render() {
        return (
        <div className="ColorPicker">
            <h2 className={s.title}>ColorPicker</h2>
            <div className={s.box}>
                <p>Color: {this.props.options[this.state.activeIndex].label}</p>
            
                {this.props.options.map(({color, label}, index) => (
                        <button
                            onClick={() =>  this.setActivIndex(index) }
                            type="button"
                            className={this.makeOptionName(index)}
                            key={color}
                            style={{
                                backgroundColor: color,
                                color: 'black'
                            }}
                        >
                            {label}
                        </button>
                    )
                )}
                    
            </div>
        </div>
        )}
}

export default ColorPicker;