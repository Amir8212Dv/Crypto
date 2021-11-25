import React  from 'react';
// CSS
import styles from '../styles/Coine.module.css'

const Coine = props => {
    
    const {id , name , image , symbol , current_price , price_change_24h , market_cap , market_cap_rank} = props.data
   
   
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.rank}>{market_cap_rank}</span>
                <img src={image} alt={id} className={styles.image}/>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.symbol}>{symbol}</p>
            <p className={styles.price}>{current_price && `$${current_price.toLocaleString()}`}</p>
            {price_change_24h ?<span className={price_change_24h.toFixed(2) > 0 
                ? styles.priceChange_positive 
                : 
                price_change_24h.toFixed(2) < 0 ? styles.priceChange_negetive : styles.priceChange_zero}>{price_change_24h.toFixed(2)}%</span>
            :<div className={styles.priceChange_zero}></div>}
            <p className={styles.marketCap}>{market_cap && `$${market_cap.toLocaleString()}`}</p>
        </div>
    
    );
};

export default React.memo(Coine);