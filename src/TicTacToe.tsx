import { play, reset } from "./auxiliar/store";
import { useAppDispatch, useAppSelector } from "./auxiliar/types";

export default function TicTacToe() {
    const state = useAppSelector((state) => state.ticTacToe);
    const dispatch = useAppDispatch();
    console.log(state.winner);

    return (
        <div className="ticTacToe">
            {state.winner === "?" && <div>Aguardando a jogada de {state.nextPlayer}</div>}
            {state.winner !== "?" && (
                <>{state.winner === "=" ? <h1>Empate</h1> : <h1>Vencedor {state.winner} </h1>}</>
            )}

            <table>
                <tbody>
                    {state.board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    key={j}
                                    //onClick={() => dispatch({ type: "play", payload: { i, j } })}
                                    onClick={() => dispatch(play({ i, j }))}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                //onClick={() => dispatch({ type: "reset" })}>Reiniciar partida
                onClick={() => dispatch(reset())}
            >
                Reiniciar partida
            </button>
        </div>
    );
}
