const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    User:[],
    isEdit : [],
    loginData : []
}

const userSlice  = createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state, action) => {
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
        },
        loginUser : (state , action ) => {
            state.loginData  = action.payload 
            // localStorage.setItem(JSON.parse(state.loginData));
        },
    }
})

export const { addUser , editUser , deleteUser , updateUser , loginUser } = userSlice.actions;
export default userSlice.reducer;