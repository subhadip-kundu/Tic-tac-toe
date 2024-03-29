import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Grid.css'
import isWinner from '../../Helpers/checkWinner.js';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [turn, setTurn] = useState(true);
    const [person, setperson] = useState(true);
    const [winner, setWinner] = useState(null);


    function play(index) {
        if (turn == true) {
            board[index] = 'O';
        }
        else {
            board[index] = 'X';
        }
        const win = isWinner(board, turn ? 'O' : 'X');
        if (win) {
            setWinner(win);
            setperson(false);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(''));
        setperson(true);
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <aside className='button-wrapper'>
                        <h1 className='winner-highlight'> Winner is "{winner}"</h1>
                        <button className='reset' onClick={reset}>Reset Game</button>
                    </aside>
                )
            }
            {
                person &&
                (<h1 className="turn-highlight">{(turn) ? "'O'" : "'X'"}  Turn</h1>)
            }
            <div className='grid'>
                {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    )
}


export default Grid;