import React , {useEffect, useState } from "react";
// CSS
import styles from '../styles/Landing.module.css'
// Gif
import Spinner from '../gif/spinner.gif'
// Components
import Coine from "./Coine";
import Pagination from "./Pagination";
import Search from "./Search";
// Method
import api from '../services/api'


const Coins = (props) => {

    const [search , setSearch] = useState('')
    const page = parseInt(props.match.params.page)
    const [data , setData] = useState()
    const [containerSize , setContainerSize] = useState(styles.coinsContainer)
    
    const coins = data ?data.filter(item => {
        return (
        item.id.toLowerCase().includes(search) || 
        item.symbol.toLowerCase().includes(search) || 
        item.name.toLowerCase().includes(search)) 
    }) : []
    
    useEffect(() => {

        setContainerSize(styles.coinsContainer) // for refresh styles in new page
        setData('')

        api(page).then(
            response => setData(response)
        )
    } , [page])
    

    return(
        <div>
        {!data ? <div className={styles.spinner}><img src={Spinner} alt='gif'  /> </div>
        :
        <>
            <Search data={search} method={setSearch} />
            <div className={styles.parentContainer}>
                <div className={styles.top}>
                    <p className={styles.page}>Page <span> {page}</span></p>
                    <Pagination page={page} side='right' />
                </div>
                <div className={containerSize}>
                    <div className={styles.title}>
                        <p className={styles.rank}>#</p>
                        <p className={styles.name}>Coin</p>
                        <p className={styles.symbol}>Symbol</p>
                        <p className={styles.price}>Price</p>
                        <p className={styles.priceChange}>Daily</p>
                        <p className={styles.marketCap}>Market cap</p>
                    </div>
                    {coins.length ? coins.map(coin =><Coine data={coin} key={coin.id} />) : undefined}
                
                </div>
                <div className={styles.bottom}>
                    <Pagination page={page} side='left' />
                {coins.length > 10 &&  <button onClick={() => {
                    setContainerSize(containerSize === styles.coinsContainer ? styles.coinsBigContainer : styles.coinsContainer)
                    }}>{containerSize === styles.coinsContainer ? 'more ...' : '... less'}</button>}
                </div>
            </div>
        </>
    }

        </div>
    )
}

export default React.memo(Coins)