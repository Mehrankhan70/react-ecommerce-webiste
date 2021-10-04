import React from 'react'
import Category from '../../components/categories/Category'
import styles from './products.module.css'
import tshirt_banner from '../../images/tshirt_banner.jpg'

const Products = () => {
    return (
        <>
        {/* <img src={tshirt_banner} style={{width:'100%',height:'355px'}}/> */}
        <section className={styles.category}>
            <div className='container'>
                    <div className='row mt-4'>
                        <h3>All Products</h3>
                        <Category/>
                    </div>
            </div>
         </section>
       </>
    )
}

export default Products
