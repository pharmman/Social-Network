import React from "react";
import classes from './Paginator.module.css'
type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
        return (
            <div className={classes.pageNumbers}>
                {pages.map((p, index) => {
                    return <span
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        className={currentPage === p ? classes.currentPage : ''}
                        style={{margin: '2px'}}
                        key={index}>{p}</span>
                })}
            </div>
        )
}