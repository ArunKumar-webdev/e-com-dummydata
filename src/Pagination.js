import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav style={{marginBottom: '2rem'}}>
            <ul className='pagination'>
                {pageNumbers.map((number) => (
                    <li key={number} onClick={() => paginate(number)} className='page-item'>
                        <span className='page-link'>{number}</span>

                    </li>
                ))}</ul>
        </nav>
    )
}

export default Pagination