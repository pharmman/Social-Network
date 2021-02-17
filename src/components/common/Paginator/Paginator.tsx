import React from 'react';
import classes from './Paginator.module.css'
import ReactPaginate from 'react-paginate';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onChangeHandler: (p: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, onChangeHandler}) => {

    return (
        <div className={classes.reactPaginate}>
            <ReactPaginate pageCount={Math.ceil(totalUsersCount / pageSize)} pageRangeDisplayed={8}
                           marginPagesDisplayed={2}
                           onPageChange={(p) => onChangeHandler(p.selected + 1)}
                           activeClassName={classes.active}
                           disableInitialCallback={true}
            />
        </div>
    )
}