//   quizzes: {
//     quizzes: {
//       '456': {
//         id: '456',
//         topicId: '123',
//         name: 'quiz for example topic',
//         cardIds: ['789', '101', '102']
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
    initialState: {
        topics:{},
        quizzes: {},
    },
    reducers: {
        //payload id == topic's id 
        addTopic(state, { payload }) {
            state.topics = payload

        },
        editTopic(state){},
        deleteTopic(state){},

        addQuizId(state, { payload }) {
            const quizId = payload.id
            state.topics[payload.topicId].quizId = quizId
        }
    
    }
})

export const selectTopics = (state) => state.topics.topics
export const selectQuizIds = (state) => state.topics.quizzes

export const { addTopic, editTopic, deleteTopic, addQuizId } = topicsSlice.actions
export default topicsSlice.reducer