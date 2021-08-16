import { configureStore } from "@reduxjs/toolkit";
import { ActionPlay, ActionReset, CellValue, ITicTacToeState, Winner } from "./types";

const initialState: ITicTacToeState = {
    nextPlayer: "X",
    winner: "?",
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ],
};

function getWinner(board: CellValue[][]): Winner {
    const players: ("X" | "O")[] = ["X", "O"];
    for (const p of players) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === p && board[i][1] === p && board[i][2] === p) return p;
            if (board[0][i] === p && board[1][i] === p && board[2][i] === p) return p;
        }
        if (board[0][0] === p && board[1][1] === p && board[2][2] === p) return p;
        if (board[0][2] === p && board[1][1] === p && board[2][0] === p) return p;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "") {
                return "?";
            }
        }
    }
    return "=";
}


function ticTacToeReducer(state = initialState, action: ActionPlay | ActionReset): ITicTacToeState {
    switch (action.type) {
        case "play":
            const { i, j } = action.payload;
            if (state.board[i][j] === "" && state.winner === "?") {
                //teste de jogada válida em espaço vazio do board
                const board = state.board.map((row) => row.map((cell) => cell));
                board[i][j] = state.nextPlayer;
                const winner = getWinner(board);
                return {
                    nextPlayer: state.nextPlayer === "X" ? "O" : "X",
                    winner,
                    board,
                };
            } else {
                return state; //retorno do próprio estado inalterado
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
