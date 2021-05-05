import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine,
} from 'react-sparklines';
import './Charts.scss';
export function Charts({ marketY, transictionY }) {
    return (
        <section className='chart-cmp'>
            <div className='chart1'>
                <h1>Market Price Chart</h1>
                {marketY && (
                    <Sparklines
                        data={marketY}
                        width={100}
                        height={20}
                        margin={4}
                    >
                        <SparklinesLine
                            color='lightblue'
                            style={{ fill: 'none' }}
                        />
                        <SparklinesReferenceLine type='avg' />
                    </Sparklines>
                )}
            </div>
            <div className='chart2'>
                <h1>Confirmed transactions per day</h1>
                {transictionY && (
                    <Sparklines
                        data={transictionY}
                        width={100}
                        height={20}
                        margin={3}
                    >
                        <SparklinesLine
                            color='lightblue'
                            style={{ fill: 'none' }}
                        />
                        <SparklinesReferenceLine type='avg' />
                    </Sparklines>
                )}
            </div>
        </section>
    );
}
