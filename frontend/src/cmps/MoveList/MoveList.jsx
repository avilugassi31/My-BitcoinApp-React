import React from 'react';
import './MoveList.scss';

export function MoveList({ moves }) {
    return (
        moves && (
            <div className='move-list'>
                <ul>
                    <h1 className='title-move-list'>your last 3 moves</h1>
                    {moves.slice(0, 3).map((move) => (
                        <li key={move.toId}>
                            <h1>to:{move.to}</h1>
                            <h2>transfer date: {move.transferAt}</h2>
                            <h2>transfer time: {move.transferTime}</h2>
                            <h2>amount: {move.amount} coins</h2>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}
