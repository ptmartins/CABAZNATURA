import './product.css';
import {FaShoppingBasket} from 'react-icons/fa';

function Product({category, name, price, unit, imgSrc, offer}) {

    let el = offer ? <span className="offer__flag">-15%</span> : '';

    return(
        <div className="card product card--product">
            {el}
            <div className="product__image">
                <img src={`/images/${imgSrc}`} alt={name} />
            </div>
            <div className="product__content">
                <span className="product__category">{category}</span>
                <h4 className="product__name">{name}</h4>
                <div className="product__cost">
                    <span className="product__currency">£</span>
                    <span className="product__price">{price}</span>
                    <span className="product__unit">/{unit}</span>
                </div>
                <button className="btn btn--main btn--addToBasket"> <FaShoppingBasket className="btn__icon"/> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;