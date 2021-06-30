import React from 'react'
import './Home.css'
import Product from './Product'


function Home () {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M16/1500x600_Hero-Tall_JPN._CB669022949_.jpg'
                    alt=""
                />

                <div className='home__row'>
                    <Product 
                        title='The Lean Startup'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                    <Product 
                        title='New Apple iPhone 12 (128GB) - Green'
                        price={529.99}
                        image='https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UY218_.jpg'
                        rating={1}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        title='Dell Inspiron 5406 14" (35.56 cms) FHD Display 2in1 Laptop (11th Gen i3-1115G4 / 4GB / 256GB SSD /'
                        price={654.50}
                        image='https://images-na.ssl-images-amazon.com/images/I/51XJpBuNEUL._SL1080_.jpg'
                        rating={3}
                    />
                    <Product 
                        title='Bajaj GX-1 Mixer Grinder, 500W, 3 Jars'
                        price={150}
                        image='https://m.media-amazon.com/images/I/714W80Jwi0L._AC_UY218_.jpg'
                        rating={2}
                    />
                    <Product 
                        title='Amazon Echo (2nd Gen), Certified Refurbished, Black – Smart speaker with Alexa – Like new, backed with 1-year warranty'
                        price={229.99}
                        image='https://m.media-amazon.com/images/I/61QoZCzMx3L._AC_UY218_.jpg'
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        title='Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)'
                        price={1129.99}
                        image='https://m.media-amazon.com/images/I/81V+hqDbomL._AC_UY218_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home