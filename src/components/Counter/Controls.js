import s from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
    return (
        <div className={s.counter}>

            <div className={s.controls}>
                <button type="button" className={s.btn} onClick={onIncrement}>+1</button>
                <button type="button" className={s.btn} onClick ={onDecrement}>-1</button>
            </div>

        </div>
    )
}

export default Controls;