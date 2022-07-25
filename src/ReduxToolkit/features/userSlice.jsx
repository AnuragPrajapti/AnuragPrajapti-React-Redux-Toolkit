import { act } from "react-dom/test-utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    User:[],
    isEdit : []
}

const userSlice  = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state, action) => {
            console.log("Action data regisrer",action.payload);
            state.User.push(action.payload);
          },
        editUser : (state , action) => {
          state.id = action.payload
          state.isEdit = state.User[action.payload]
        },
        deleteUser : (state , action) =>{
            state.User.splice(action.payload, 1);
        },
        updateUser : (state , action) => {
           state.User[action.payload.id] = action.payload
        }
    }
})

export const { addUser , editUser , deleteUser , updateUser } = userSlice.actions;
export default userSlice.reducer;