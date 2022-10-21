
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
    initialState: {
        topics:{},
        quizzes: {},
    },
    reducers: {
        //payload id == topic's id 
        addTopic(state, { payload }) {
            state.topics = {
                ...state.topics,
                [payload.id] : payload
            }

        },
        editTopic(state){},
        deleteTopic(state){},

        addQuizId(state, { payload }) {
            
            state.topics[payload.topicId].quizId = payload.id
        }
    
    }
})

export const selectTopics = (state) => state.topics.topics
export const selectQuizIds = (state) => state.topics.quizzes

export const { addTopic, editTopic, deleteTopic, addQuizId } = topicsSlice.actions
export default topicsSlice.reducer