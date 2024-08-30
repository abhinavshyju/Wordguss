import React, { useState } from 'react';
import './index.css'
import Btns from './components/buttons';
import Letters from './components/letter';

export default function App() {

    const myObject = [
        {
            "SUNRISE": "A beautiful start to the day, signaling new beginnings.",
            "SMILE": "A simple gesture that can brighten someone’s day.",
            "FRIENDSHIP": "A bond between people that brings support and joy.",
            "KNOWLEDGE": "Something gained through learning, helping you grow.",
            "PEACE": "A state of tranquility and harmony, free from conflict.",
            "LOVE": "A deep affection that connects people in meaningful ways.",
            "COURAGE": "The strength to face challenges, even when you're afraid.",
            "HOPE": "A feeling that inspires you to look forward to positive outcomes.",
            "KINDNESS": "An act of being friendly, generous, and considerate to others.",
            "CREATIVITY": "The ability to think outside the box and bring new ideas to life.",
            "GRATITUDE": "A feeling of thankfulness for the good things in life."
        }
    ];
    const Words = Object.keys(myObject[0])

    const [randomNum, changeRandomNumber] = useState(Math.floor(Math.random() * Words.length))
    const [chance, editChance] = useState(Object.keys(myObject[0])[randomNum].length + 3)
    const Hint = Object.values(myObject[0])
    const [userInput, appendUserInput] = useState([])
    const [letters, lettesAdd] = useState([])
    const [btnReset, btnResetAdd] = useState(true)
    const [won, changeWon] = useState(false)



    function change() {
        btnResetAdd(false)
        changeWon(false)
    }

    return (
        <section className="gameRoot">
            <h1 className="heading">{won ? "You Win!!!" : chance ? "WORD GUESS GAME" : "Game Over"}</h1>
            <h1 className="heading">{won ? "key : technova_{you_did_it}" : chance ? null : "Rest game"}</h1>
            <p className='hint'>Hint: {Hint[randomNum]}</p>
            <p className='chance'>Chances left: {chance}</p>
            <Letters {...Words} randomNum={randomNum} value={userInput} changeWon={changeWon} />
            <Btns value={userInput} lol={appendUserInput} word={Words[randomNum]} chanceReducer={editChance} letters={letters} lettesAdd={lettesAdd} btnReset={btnReset} btnResetAdd={btnResetAdd} won={won} chance={chance} />
            <div className='forResetBtn'><button className='resetBtn' onClick={change}>RESTART</button></div>
        </section>
    )
}