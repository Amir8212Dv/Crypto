import React , {useEffect, useState } from "react";
// CSS
import styles from './Coins.module.css'
// Gif
import Spinner from '../gif/spinner.gif'
// Components
import SingleCoine from "./SingleCoine";
import Pagination from "./Pagination";
import Search from "./Search";
// Method
import api from './api'


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
                        <span className={styles.rank}>#</span>
                        <span className={styles.name}>Coin</span>
                        <span className={styles.symbol}>Symbol</span>
                        <span className={styles.price}>Price</span>
                        <span className={styles.priceChange}>Daily</span>
                        <span className={styles.marketCap}>Market cap</span>
                    </div>
                    {coins.length ? coins.map(coin =><SingleCoine data={coin} key={coin.id} />) : undefined}
                
                </div>
                <div className={styles.bottom}>
                    <Pagination page={page} side='left' />
                {coins.length > 10 &&  
                <button onClick={() => {
                    setContainerSize(containerSize === styles.coinsContainer 
                        ? styles.coinsBigContainer 
                        : styles.container)
                    }}>{containerSize === styles.container ? 'more ...' : '... less'}</button>}
                </div>
            </div>
        </>
    }

        </div>
    )
}

export default React.memo(Coins)