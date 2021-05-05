import React from 'react';
import './StatisticPage.scss';
import { bitCoinService } from '../../services/bitCoinService';
import { Charts } from '../../cmps/Charts';
export class StatisticPage extends React.Component {
    state = {
        market: null,
        transiction: null,
    };
    componentDidMount() {
        this.getMarket();
        this.getTransiction();
    }
    async getMarket() {
        const market = await bitCoinService.getMarketPrice();
        const y = market.values.map((value) => {
            return value.y;
        });
        this.setState({ market: y });
    }
    async getTransiction() {
        const transiction = await bitCoinService.getConfirmedTransactions();
        const y = transiction.values.map((trans) => {
            return trans.y;
        });
        this.setState({ transiction: y });
    }
    componentDidUpdate() {}
    componentWillUnmount() {}

    render() {
        const { market, transiction } = this.state;
        return (
            <div>
                <Charts marketY={market} transictionY={transiction} />
            </div>
        );
    }
}
