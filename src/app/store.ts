import { configureStore } from '@reduxjs/toolkit'
import dataemployeeReducer from '../counter/counterSlice'
export const store =  configureStore({
  reducer: {
    dataemployee: dataemployeeReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch