//   cards: {
//     cards: {
//       '789': {
//         id: '789',
//         front: 'front text',
//         back: 'back text'
//       },
//       '101': {
//         id: '101',
//         front: 'front text',
//         back: 'back text'
//       },
//       '102': {
//         id: '102',
//         front: 'front text',
//         back: 'back text'
//       },
//     }
//   }

import { createSlice } from "@reduxjs/toolkit";
const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard(state, { payload }) {
            state.cards = {
                ...state.cards,
                [payload.id] : payload

            }
            
        }
    }
})

export const selectCards = (state) => state.cards.cards
export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer