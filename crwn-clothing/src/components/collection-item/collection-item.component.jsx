import React from 'react';

import './collection-item.styles.scss';


const CollectionItem = ({id, name, price, imageUrl})=>(
    <div className="collection-item">
        <div 
        className="image"
        style={{
            background: `url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <spam className="name">{name}</spam>
            <span className="price">{price}</span>
        </div>
        
    </div>
);



export default CollectionItem; 