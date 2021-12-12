import {FaTruck, FaChevronRight} from 'react-icons/fa';
import {AiOutlineEuro} from 'react-icons/ai';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {SiSpeedtest} from 'react-icons/si';
import {BiSupport} from 'react-icons/bi';
import {ImQrcode} from 'react-icons/im';
import veggies from '../../assets/images/veggies.png';
import fruitsVeg from '../../assets/images/fruits_veg.png';
import jams from '../../assets/images/jams.png';
import Product from '../Product/Product';
import PhoneApp from '../../assets/images/phone_app.png';
import Review from '../Review/Review';
import './Home.css';

const data = {
    fruits: [
        {
        id: 1,
        name: "Abacate",
        imgSrc: "abacate.png",
        price: 5.3,
        unit: "Kg"
        },
        {
        id: 2,
        name: "Banana",
        imgSrc: "banana.png",
        price: 2.5,
        unit: "Kg"
        },
        {
        id: 3,
        name: "Clementina",
        imgSrc: "clementina.png",
        price: 2.4,
        unit: "Kg"
        },
        {
        id: 4,
        name: "Kiwi",
        imgSrc: "kiwi.png",
        price: 3.9,
        unit: "Kg"
        },
        {
        id: 5,
        name: "Limao",
        imgSrc: "limao.png",
        price: 2.2,
        unit: "Kg"
        },
        {
        id: 6,
        name: "Pera",
        imgSrc: "pera.png",
        price: 1.9,
        unit: "Kg"
        },
        {
        id: 7,
        name: "Maracuja",
        imgSrc: "maracuja.png",
        price: 15,
        unit: "Kg"
        },
        {
        id: 8,
        name: "Manga",
        imgSrc: "manga.png",
        price: 5.2,
        unit: "Kg"
        },
        {
        id: 9,
        name: "Maca",
        imgSrc: "maca.png",
        price: 1.9,
        unit: "Kg"
        },
        {
        id: 10,
        name: "Maca reineta",
        imgSrc: "maca_r.png",
        price: 1.9,
        unit: "Kg"
        }
    ],
    vegetables: [
        {
        id: 1,
        name: "Abobora manteiga",
        imgSrc: "abobora.png",
        price: 1.5,
        unit: "unid.",
        offer: true
        },
        {
        id: 2,
        name: "Abobora menina",
        imgSrc: "",
        price: 1.7,
        unit: "Kg",
        offer: false
        },
        {
        id: 3,
        name: "Agrioes",
        imgSrc: "",
        price: 2,
        unit: "molho",
        offer: false
        },
        {
        id: 4,
        name: "Alface",
        imgSrc: "alface.png",
        price: 1,
        unit: "unid.",
        offer: true
        },
        {
        id: 5,
        name: "Alho frances",
        imgSrc: "",
        price: 0.9,
        unit: "unid.",
        offer: false
        },
        {
        id: 6,
        name: "Alho seco",
        imgSrc: "",
        price: 0.7,
        unit: "unid.",
        offer: false
        },
        {
        id: 7,
        name: "Batata",
        imgSrc: "batata.png",
        price: 1.3,
        unit: "Kg",
        offer: true
        },
        {
        id: 8,
        name: "Batata doce",
        imgSrc: "batata_doce.png",
        price: 1.5,
        unit: "Kg",
        offer: true
        },
        {
        id: 9,
        name: "Batata doce laranja",
        imgSrc: "",
        price: 2,
        unit: "Kg",
        offer: false
        },
        {
        id: 10,
        name: "Batatinha",
        imgSrc: "",
        price: 1.2,
        unit: "Kg",
        offer: false
        },
        {
        id: 11,
        name: "Beterraba",
        imgSrc: "beterraba.png",
        price: 1,
        unit: "unid.",
        offer: true
        },
        {
        id: 12,
        name: "Brocolos",
        imgSrc: "",
        price: 3.5,
        unit: "Kg",
        offer: false
        },
        {
        id: 13,
        name: "Caldo verde",
        imgSrc: "",
        price: 4.5,
        unit: "Kg",
        offer: false
        },
        {
        id: 14,
        name: "Cebola",
        imgSrc: "",
        price: 1.5,
        unit: "Kg",
        offer: false
        },
        {
        id: 15,
        name: "Cebola roxa",
        imgSrc: "",
        price: 2.7,
        unit: "Kg",
        offer: false
        },
        {
        id: 16,
        name: "Cenoura com rama",
        imgSrc: "",
        price: 1.5,
        unit: "Kg",
        offer: false
        },
        {
        id: 17,
        name: "Chicoria",
        imgSrc: "",
        price: 1.2,
        unit: "unid.",
        offer: false
        },
        {
        id: 18,
        name: "Chuchu",
        imgSrc: "",
        price: 1.2,
        unit: "unid.",
        offer: false
        },
        {
        id: 19,
        name: "Coentros",
        imgSrc: "",
        price: 0.7,
        unit: "molho",
        offer: false
        },
        {
        id: 20,
        name: "Cogumelos",
        imgSrc: "",
        price: 7.5,
        unit: "Kg",
        offer: false
        }
    ]
}

const reviews = [
    {
        author: 'Diana Prince',
        txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eveniet quae rem totam impedit quos quasi unde numquam a ratione.'
    },
    {
        author: 'John Wick',
        txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eveniet quae rem totam impedit quos quasi unde numquam a ratione.'
    },
    {
        author: 'Carol Danvers',
        txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eveniet quae rem totam impedit quos quasi unde numquam a ratione.'
    },
    {
        author: 'Jack Reacher',
        txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse eveniet quae rem totam impedit quos quasi unde numquam a ratione.'
    }
]

function Home() {
    return(
        <>
            <section className="section section--hero">
                <div className="innerWrapper">
                    <div className="hero__content">
                        <h1 className="hero__title">Organic</h1>
                        <h3 className="hero__subtitle">Organic food, good health, good mood ...</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam vitae error voluptates, necessitatibus ipsa id eum eos. Harum, consequuntur totam eius ipsam quisquam, odit alias voluptates soluta et eum porro distinctio, deserunt corporis architecto doloremque sapiente recusandae atque? Voluptatibus asperiores quidem velit ex optio corporis maiores, consequuntur exercitationem sunt at.</p>
                    </div>
                    <div className="hero__img">
                        <img src={fruitsVeg} alt="" />
                    </div>
                    <div className="hero__highlights">
                        <div className="hero__highlight">
                            <FaTruck className="highlight__icon" />
                            <h4  className="highlight__title">Free delivery</h4>
                        </div>
                        <div className="hero__highlight">
                            <AiOutlineEuro className="highlight__icon" />
                            <h4  className="highlight__title">Cash back</h4>
                        </div>
                        <div className="hero__highlight">
                            <SiSpeedtest className="highlight__icon" />
                            <h4  className="highlight__title">Fast delivery</h4>
                        </div>
                        <div className="hero__highlight">
                            <BiSupport className="highlight__icon" />  
                            <h4 className="highlight__title">Support 24/7</h4>
                        </div>
                        <div className="hero__highlight">
                            <RiSecurePaymentLine className="highlight__icon" />
                            <h4  className="highlight__title">Secure payment</h4>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section section--categories">
                <div className="innerWrapper">
                    <h2 className="section__title">Categories</h2>
                        <div className="category category--vegetables">
                            <div className="category__txt">
                                <h4 className="category__title">Vegetables</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore dolorem tenetur ratione! Culpa, commodi obcaecati?</p>
                        </div>
                        <img src={veggies} alt="Fruits" className="category__img" />
                        <button className="btn category__cta">Shop now <FaChevronRight className="cta__icon"/>  </button>
                    </div>
                    <div className="category category--fruits">
                        <div className="category__txt">
                            <h4 className="category__title">Fruits</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore dolorem tenetur ratione! Culpa, commodi obcaecati?</p>
                        </div>
                        <img src={fruitsVeg} alt="Fruits" className="category__img" />
                        <button className="btn category__cta">Shop now <FaChevronRight className="cta__icon"/>  </button>
                    </div>
                    <div className="category category--confectionery">
                        <div className="category__txt">
                            <h4 className="category__title">Confectionery</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore dolorem tenetur ratione! Culpa, commodi obcaecati?</p>
                        </div>
                        <img src={jams} alt="Fruits" className="category__img" />
                        <button className="btn category__cta">Shop now <FaChevronRight className="cta__icon"/>  </button>                        
                    </div>
                </div>  
            </section>

            <section className="section section--explore">
                <div className="innerWrapper">
                    <h2 className="section__title">Explore our products</h2>
                    <div className="products">
                        {data.fruits.map(item => {
                            return(
                                <Product id={item.id} name={item.name} category="Fruits" price={item.price} unit={item.unit} imgSrc={`/fruits/${item.imgSrc}`} />
                            )
                        })}
                    </div>
                </div>  
            </section>

            <section className="section section--offers">
                <div className="innerWrapper">
                    <h2 className="section__title">Hot offers</h2>
                    {data.vegetables.filter(item => item.offer === true).map(item => {
                        return(
                            <Product name={item.name} price={item.price} category="Vegetables" unit={item.unit} offer={item.offer} imgSrc={`/vegetables/${item.imgSrc}`} className="offer" />
                        )
                    })}
                </div>  
            </section>

            <section className="section section--downloadApp">
                <div className="innerWrapper">
                    <h2 className="section__title section__title--downloadApp">Download</h2>
                    <h4 className="downloadApp__subtitle">Our new App</h4>
                    <p className="downloadApp__txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim explicabo possimus distinctio voluptate id, qui rerum facilis repudiandae asperiores atque, perspiciatis dolorem magni natus voluptatum odio fugiat ad. Minus temporibus nostrum tempora distinctio ab adipisci quia ipsam consequuntur! Ipsa nihil necessitatibus quasi sed voluptates pariatur deserunt delectus earum eum aliquid blanditiis, dolorum magnam perferendis et nostrum vero. Perspiciatis, possimus quae?</p>
                    <ImQrcode className="qrCode"/>
                    <img src={PhoneApp} alt="" className="phoneApp"/>
                </div>  
            </section>

            <section className="section section--reviews">
                <div className="innerWrapper">
                    <h2 className="section__title">Reviews</h2>
                    <div className="reviews">
                        {reviews.map(item => {
                            return(
                            <Review name={item.author} txt={item.txt} />
                            )
                        })}
                    </div>
                </div>  
            </section>
        </>
    )
}

export default Home;