import { useAppDispatch, useAppSelector } from "./auxiliar/types";

export default function TicTacToe() {
    const state = useAppSelector((state) => state.ticTacToe);
    const dispatch = useAppDispatch();
    console.log(state.winner);

    return (
        <div className="ticTacToe">
            <div>Aguardando a jogada de {state.nextPlayer}</div>
            <table>
                <tbody>
                    {state.board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    onClick={() => dispatch({ type: "play", payload: { i, j } })}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => dispatch({ type: "reset" })}>Reiniciar partida</button>
        </div>
    );
}
