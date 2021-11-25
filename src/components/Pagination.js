import React from "react";
import { Link } from "react-router-dom";
// CSS
import styles from './Pagination.module.css'

const Pagination = ({page}) => {

  

    return(
        <>
            {<ul className={styles.list}>
                {page > 1 && <li className={styles.prevBtn}><Link to={`/coins/${page - 1}`}>previus</Link></li>}
                <li id={page === 1 ? styles.active : undefined}><Link to='./1'>1</Link></li>
                {page < 5 && 
                <>
                    <li id={page === 2 ? styles.active : undefined}><Link to='/coins/2'>2</Link></li>
                    <li id={page === 3 ? styles.active : undefined}><Link to='/coins/3'>3</Link></li>
                    <li id={page === 4 ? styles.active : undefined}><Link to='/coins/4'>4</Link></li>
                    <li id={page === 5 ? styles.active : undefined}><Link to='/coins/5'>5</Link></li>
                    <li className={styles.dot}>...</li>
                </>}
                { page >= 5 && page <= 40 &&
                <>
                    <li className={styles.dot}>...</li>
                    <li ><Link to={`/coins/${page - 2}`}>{page - 2}</Link></li>
                    <li ><Link to={`/coins/${page - 1}`}>{page - 1}</Link></li>
                    <li id={styles.active}><Link to={`/coins/${page}`}>{page}</Link></li>
                    <li ><Link to={`/coins/${page + 1}`}>{page + 1}</Link></li>
                    <li ><Link to={`/coins/${page + 2}`}>{page + 2}</Link></li>
                    <li className={styles.dot}>...</li>
                </>}
                {page > 40 && 
                <>
                    <li className={styles.dot}>...</li>
                    <li id={page === 40 ? styles.active : undefined}><Link to='/coins/40'>40</Link></li>
                    <li id={page === 41 ? styles.active : undefined}><Link to='/coins/41'>41</Link></li>
                    <li id={page === 42 ? styles.active : undefined}><Link to='/coins/42'>42</Link></li>
                    <li id={page === 43 ? styles.active : undefined}><Link to='/coins/43'>43</Link></li>
                </>}
                <li id={page === 44 ? styles.active : undefined}><Link to='./44'>44</Link></li>
                {page < 44 && <li  className={styles.nextBtn}><Link to={`/coins/${page + 1}`}>next</Link></li>}
            </ul>}
        </>
    )
}

export default Pagination