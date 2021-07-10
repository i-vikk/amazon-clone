import React from 'react';
import Product from "./Product";
import './Home.css';

function Home() {
    return (
        <div className="home">
           <img className="home__image" 
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt="" />
        
        {/*Product id, title, price, rating, image */}
        <div className="home__row">
        <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Create Radically Successfull Business Paperback"
            price={11.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
           <Product 
            id="12346"
            title="Wakefit Sofa Set"
            price={995}
            rating={5}
            image="https://wakefit-co.s3.ap-south-1.amazonaws.com/img/sofa-sets/napper/sectional/lc/FOBL/2.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
            id="12347"
            title="Armani Exchange Watch"
            price={350}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81NGNzug1wL._UL1500_.jpg"
        />
         <Product 
            id="12348"
            title="IPhone 12 Pro"
            price={1099}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000"
        />
         <Product 
            id="12349"
            title="Samung 65inch 4k OLED TV"
            price={1195}
            rating={5}
            image="https://images.samsung.com/is/image/samsung/in-uhd-tv-tue60a-ua65tue60akxxl-fronttitangray-231850798?$684_547_PNG$"
        />
        </div>
        <div className="home__row">
        <Product 
            id="12350"
            title="New Macbook Air M1"
            price={999.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1603332211000"
        />
        </div>
        </div>
    );
}

export default Home
