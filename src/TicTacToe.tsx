type CellValue = "X" | "O" | "";
interface ITicTacToeState {
    nextPlayer: "X" | "O",
    board: CellValue[][],
}


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
