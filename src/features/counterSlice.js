import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    numOfCount : 10
}


const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        onIncreament:(state,action)=>{
            state.numOfCount+= action.payload
        },
        onDecreament:(state,action)=>{
            state.numOfCount-=action.payload

        }
    }

})

export default counterSlice.reducer

export const {onIncreament,onDecreament} = counterSlice.actions