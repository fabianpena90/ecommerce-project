import React from 'react'
import { Helmet } from 'react-helmet'


const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Fabian\'s Shop',
    keywords: 'electronics, buy electronics, best shop in town, good for the price',
    description: 'We see the latest and best products for an amazing price'
}

export default Meta
