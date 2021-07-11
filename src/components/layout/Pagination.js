import React from 'react'
import { Pagination } from 'react-bootstrap';

export const PaginationItem = (props) => {
    const { pageNums, currentPage, paginate, prevPage , nextPage } = props;
    const pageNumbers = [];
    console.log()
    for (let number = 1; number <= pageNums; number++) {
        pageNumbers.push(
            <Pagination.Item key={number} active={number === currentPage ? true : false} onClick={() => paginate(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>
                <Pagination.Prev onClick={prevPage}/>
                {pageNumbers}
                <Pagination.Next onClick={nextPage}/>
            </Pagination>
        </div>
    )
}
