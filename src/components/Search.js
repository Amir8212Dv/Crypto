import React from 'react';
// CSS
import styles from '../styles/Search.module.css'


const Search = (props) => {
    return (
        <div className={`form-floating my-4 mx-auto ${styles.container}`}>
            <input id='search' className='form-control ' type='search' placeholder='Search' value={props.data} onChange={event => {
                props.method(event.target.value.toLowerCase())
            }} />
            <label for='search'>Search</label>
        </div>
    );
};

export default Search;