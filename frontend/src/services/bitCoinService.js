import axios from 'axios';
import { storageService } from './storageService';
export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
};

async function getRate() {
    const { data } = await axios.get(
        'https://blockchain.info/tobtc?currency=USD&value=1'
    );
    storageService.store('rate', data);
    return data;
}
async function getMarketPrice() {
    const { data } = await axios.get(
        'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    );
    storageService.store('marketData', data);
    return data;
}

async function getConfirmedTransactions() {
    const { data} = await axios.get(
        'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
    );
    storageService.store('mconfirmedTrans', data);
    return data;
}
