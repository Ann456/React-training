import s from './Painting.module.css';

const Painting = ({imageUrl, title, profileUrl, author, price, quantity}) => {
    return (
        <div className={s.box}>
            <img src={imageUrl} alt={title} width="480" />
            <h2>{title}</h2>
            <p>
                Автор: <a href={profileUrl}>{author}</a>
            </p>
            <p>Цена: {price} кредитов</p>
            <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
            <button className={s.btn} type="button">Добавить в корзину</button>
        </div>
    );
};

export default Painting;