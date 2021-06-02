import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
type Actions = {
    next: string | null
    previous: string | null,
    showNext: (event:React.MouseEvent)=> void,
    showPrev: (event:React.MouseEvent)=> void
}
export const Actions: React.FC<Actions> = ({next= '', previous = '', showNext, showPrev}) =>{
        return(
        <Pagination aria-label="Page navigation example">
            {previous ? <PaginationItem>
                <PaginationLink onClick={event => showPrev(event)} previous href={previous ||''} />
            </PaginationItem>: null}
            {next ? <PaginationItem style={{marginLeft: "auto"}}>
                <PaginationLink onClick={event => showNext(event)} next href={next ||''} />
            </PaginationItem> : null}

        </Pagination>
    )
}