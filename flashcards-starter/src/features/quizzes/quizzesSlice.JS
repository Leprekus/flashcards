import { createSlice } from "@reduxjs/toolkit";
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz(state, { payload }) {
            state.quizzes = {
                ...state.quizzes,
                [payload.id] : payload

            }
            
        }
    }
})
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
export const selectQuizzes = (state) => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer