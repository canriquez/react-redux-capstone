import { CURRENCY_UPDATE } from '../helpers/help';

const currencyFilter = (state = 'usd', action) => {
    console.log('@currencyFilter reducer, filter is : ' + action.filter)
    switch (action.type) {
        case CURRENCY_UPDATE:
            // eslint-disable-next-line
            console.log('In CURRENCY_UPDATE Switch wirh actio.filter : ' + action.filter)
            return action.filter

        default:
            return state;
    }
};

export default currencyFilter;