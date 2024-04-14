import  {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isActive:false
}
const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers:{
        toogle: (state, action)=>{
            state.isActive = !state.isActive;
        }
    } 
})


export const {toogle} = generalSlice.actions
export default generalSlice.reducer