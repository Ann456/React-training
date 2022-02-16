import PropTypes from 'prop-types';
import s from './Section.module.css';


const Section = ({ title, children }) => {
    return (
        <div className={s.section}>
            {title && <h1 className={s.title}>{title}</h1>}
            {children}
        </div>
    );
};

export default Section;

Section.propTypes={
    title: PropTypes.string,

};