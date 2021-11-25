import React from 'react';
// CSS
import styles from '../styles/Search.module.css'


const Search = (props) => {
    return (
        <div className={styles.container}>
            <input type='search' placeholder='Search' value={props.data} onChange={event => {
                props.method(event.target.value.toLowerCase())
            }} />
        </div>
    );
};

export default Search;