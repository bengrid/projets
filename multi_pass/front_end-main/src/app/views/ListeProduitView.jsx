import React from 'react';
import ListeProduit from '../components/Produits/ListeProduit';

const ListeProduitView = ({ match }) => {
    const keyword = match.params.keyword;

    return (
        <div>
            <ListeProduit keyword={keyword} />
        </div>
    );
};

export default ListeProduitView;