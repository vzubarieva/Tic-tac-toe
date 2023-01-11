import React from "react";
import {Box} from "./Box"

export const Board = ({board, onClick}) => {
    return (
        <div>
            {board.map((value, idx) => {
                return<Box value={value} onClick={() => onClick(idx)}/>
            })}
            
            </div>
    )
}