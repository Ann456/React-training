import Painting from 'components/Painting/Painting';
import s from './Painting.module.css';


const PaintingList = ({items}) => {
    return (
        <ul className={s.list}>
            {items.map(item => {
                return (
                    <li key={item.id} className={s.item}>
                        <Painting
                            imageUrl={item.url}
                            title={item.title}
                            profileUrl={item.author.url}
                            author={item.author.tag}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    </li>
                )
            })}
        </ul>
    );
};

export default PaintingList;