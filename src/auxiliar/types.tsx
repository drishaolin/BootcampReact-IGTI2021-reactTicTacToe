import { PayloadAction } from "@reduxjs/toolkit";
//import { Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

export type CellValue = "X" | "O" | "";

export type Winner = "X" |"O" | "?" | "=";

export interface ITicTacToeState {
    nextPlayer: "X" | "O",
    winner: Winner,
    board: CellValue[][],
}

export type ActionPlay = PayloadAction<{i: number, j: number}>;
//export type ActionReset = Action<"reset">;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
