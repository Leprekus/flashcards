//   topics: {
//     topics: {
//       '123': {
//         id: '123',
//         name: 'example topic',
//         icon: 'icon url',
//         quizIds: ['456']
//       }
//     }
//   },

import { createSlice } from "@reduxjs/toolkit";


// createSlice:
// name
// initialState
// reducers


const topicsSlice = createSlice({
    name: 'topics',
    initialState: {},
    reducers: {
        //payload id == topic's id 
        addTopic(state, { payload }) {
            state.topics = payload

        },
        editTopic(state){},
        deleteTopic(state){}
    }
})

export const selectTopics = (state) => state.topics


export const { addTopic, editTopic, deleteTopic } = topicsSlice.actions
export default topicsSlice.reducer