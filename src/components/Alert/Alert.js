// import PropTypes from 'prop-types';
import s from './Alert.module.css';

const Alert = ({text, type}) => {
    return (
        <p
            role="alert"
            className={s[type]}
        >
            {text}
        </p>
    );
};

export default Alert;

// Alert.propType = {
//     type: PropTypes.oneOf(['success', 'error', 'warning'])
// }