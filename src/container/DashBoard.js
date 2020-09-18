import React from 'react';
import DashAsset from '../components/DashAsset';
import MainAsset from '../components/MainAsset';
import MainFilter from '../components/MainFilter';
import CurrencyFilter from '../components/CurrencyFilter';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  state,
});


const renderDashBoard = ({
state,
}) =>(
        <>
            <div>
                <MainFilter />
                <CurrencyFilter />

                {
                    <MainAsset
                        asset={state.crypto[0]}
                    />
                }
                <div>
                    <p>|--- Top Down Market Cap Assets ---|</p>
                </div>
                <ul>
                    {
                        state.crypto.map((asset, id) => {
                            console.log(asset);
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
    );

const DashBoard = connect(
  mapStateToProps,
  null,
)(renderDashBoard);

export default DashBoard;