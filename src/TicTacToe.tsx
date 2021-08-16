import { Action, configureStore, PayloadAction } from "@reduxjs/toolkit";

type CellValue = "X" | "O" | "";
interface ITicTacToeState {
    nextPlayer: "X" | "O",
    board: CellValue[][],
}

const initialState: ITicTacToeState = {
    nextPlayer: "X",
    board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
} 

type ActionPlay = PayloadAction<{i: number, j: number}, "play">;
type ActionReset = Action<"reset">;

function ticTacToeReducer (state = initialState, action: ActionPlay | ActionReset) : ITicTacToeState {
    switch(action.type) {
        case "play":
            const board = state.board.map(row => row.map(cell =>(cell)));
            return {
                nextPlayer: state.nextPlayer === "X" ? "O" : "X",
                board,
            }
        case "reset":
    }
    return state;
}

const store = configureStore({
    reducer: {
        ticTacToe: ticTacToeReducer,
    },
});

console.log(store.getState());

export default function TicTacToe() {
    const state: ITicTacToeState = {
        nextPlayer: "X",
        board: [
            ["", "X", ""],
            ["", "", ""],
            ["O", "", ""],
        ]
    } 
    return (
        <div className="ticTacToe">
            <div>Aguardando a jogada de {state.nextPlayer}</div>
            <table>
                <tbody>
                    {state.board.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <button>Reiniciar partida</button>
            
        </div>
    )
}
