import { configureStore } from "@reduxjs/toolkit";
import { ActionPlay, ActionReset, ITicTacToeState } from "../types";



const initialState: ITicTacToeState = {
    nextPlayer: "X",
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
} 



function ticTacToeReducer (state = initialState, action: ActionPlay | ActionReset) : ITicTacToeState {
    switch(action.type) {
        case "play":
            const board = state.board.map(row => row.map(cell =>(cell)));
            const {i, j} = action.payload;
            board[i][j] = state.nextPlayer;
            return {
                nextPlayer: state.nextPlayer === "X" ? "O" : "X",
                board,
            }
        case "reset":
            return initialState;
    }
    return state;
}

export const store = configureStore({
    reducer: {
        ticTacToe: ticTacToeReducer,
    },
});
