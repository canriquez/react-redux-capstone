import React from 'react';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';

class DashBoard extends React.Component {

    render() {
        let assets = [
            {
                id: 'bitcoin',
                marketcap: '3887498232',
                currency: 'usd'
            },
            {
                id: 'etherum',
                marketcap: '234234334',
                currency: 'usd'
            },
            {
                id: 'bitcoincash',
                marketcap: '23423423',
                currency: 'usd'
            },
            {
                id: 'deno',
                marketcap: '2342343',
                currency: 'usd'
            },
        ]

        return (
            <>
                <div>
                    <MainFilter />
                    <CurrencyFilter />

                    {
                        <MainAsset
                            asset={assets[0]}
                        />
                    }
                    <div>
                        <p>|--- Top Down Market Cap Assets ---|</p>
                    </div>
                    <ul>
                        {
                            assets.map((asset, id) => {
                                return (
                                    id !== 0 ?
                                        <DashAsset
                                            key={asset.id}
                                            asset={asset}
                                        />
                                        : ''
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
};

export default DashBoard;