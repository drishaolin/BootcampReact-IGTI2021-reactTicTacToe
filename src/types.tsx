import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./TicTacToe";

export type CellValue = "X" | "O" | "";

export interface ITicTacToeState {
    nextPlayer: "X" | "O",
    board: CellValue[][],
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
