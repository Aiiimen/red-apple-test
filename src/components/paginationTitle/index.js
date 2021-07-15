import React from 'react';
import { Title } from '../styled';
import './paginationTitle.scss';


const PaginationTitle = ({titles, paginationId}) =>{
    
    return (
        <div className="pagination-title">
            <Title>{titles[paginationId]}</Title>
        </div>
    )
}

export default PaginationTitle;