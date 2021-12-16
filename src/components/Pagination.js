/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({page}) => {



    return(
        <>
            {<ul className='pagination'>
                {page > 1 && <li className='page-item'><Link className='page-link' to={`/coins/${page - 1}`}>previus</Link></li>}
                <li className={`page-item ${page === 1 ? 'active' : undefined}`}><Link className='page-link'  to='./1'>1</Link></li>
                {page < 5 && 
                <>
                    <li className={`page-item ${page === 2 ? 'active' : undefined}`}><Link className='page-link' to='/coins/2'>2</Link></li>
                    <li className={`page-item ${page === 3 ? 'active' : undefined}`}><Link className='page-link' to='/coins/3'>3</Link></li>
                    <li className={`page-item ${page === 4 ? 'active' : undefined}`}><Link className='page-link' to='/coins/4'>4</Link></li>
                    <li className={`page-item ${page === 5 ? 'active' : undefined}`}><Link className='page-link' to='/coins/5'>5</Link></li>
                    <li className='page-item disabled '><a href='#' className="page-link">...</a></li>
                </>}
                { page >= 5 && page <= 41 &&
                <>
                    <li className='page-item disabled '><a href='#' className="page-link">...</a></li>
                    <li className="page-item"><Link className='page-link' to={`/coins/${page - 2}`}>{page - 2}</Link></li>
                    <li className="page-item"><Link className='page-link' to={`/coins/${page - 1}`}>{page - 1}</Link></li>
                    <li className={'active page-item'}><Link className='page-link' to={`/coins/${page}`}>{page}</Link></li>
                    <li className="page-item"><Link className='page-link' to={`/coins/${page + 1}`}>{page + 1}</Link></li>
                    <li className="page-item"><Link className='page-link' to={`/coins/${page + 2}`}>{page + 2}</Link></li>
                    <li className='page-item disabled '><a href='#' className="page-link">...</a></li>                </>}
                {page > 41 && 
                <>
                    <li className='page-item disabled '><a href='#' className="page-link">...</a></li>
                    <li className={`page-item ${page === 41 ? 'active' : undefined}`}><Link className='page-link' to='/coins/41'>41</Link></li>
                    <li className={`page-item ${page === 42 ? 'active' : undefined}`}><Link className='page-link' to='/coins/42'>42</Link></li>
                    <li className={`page-item ${page === 43 ? 'active' : undefined}`}><Link className='page-link' to='/coins/43'>43</Link></li>
                    <li className={`page-item ${page === 44 ? 'active' : undefined}`}><Link className='page-link' to='/coins/44'>44</Link></li>
                </>}
                <li  className={`page-item ${page === 45 ? 'active' : undefined}`}><Link className='page-link' to='./45'>45</Link></li>
                {page < 45 && <li  className='page-item'><Link className='page-link' to={`/coins/${page + 1}`}>next</Link></li>}
            </ul>}
        </>
    )
}

export default Pagination