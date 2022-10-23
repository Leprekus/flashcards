import { renderHook } from '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import NewTopicForm from '../../components/NewTopicForm';


import { v4 as uuidv4 } from "uuid";
import store from '../../app/store';
import { addTopic, editTopic, deleteTopic, addQuizId } from '../../features/topics/topicsSlice'
describe('app', () => {
    test('should return topic\'s initial state', () => {
        const topicsSliceInitialState = {}
        expect(store.getState().topics.topics).toEqual(topicsSliceInitialState)
    })
    test('should contain mutliple topics', () => {
        
    
        const topicId1 = uuidv4()
        const topicId2 = uuidv4()
        const topicId3 = uuidv4()
        const newTopicObject1 = {
            id: topicId1,
            name: 'Test',
            icon: 'www.icon.com',
            quizIds: [] 
          
        }
        const newTopicObject2 = {
            id: topicId2,
            name: 'Test',
            icon: 'www.icon.com',
            quizIds: [] 
          
        }
        const newTopicObject3 = {
            id: topicId3,
            name: 'Test',
            icon: 'www.icon.com',
            quizIds: [] 
          
        }

        const newState = {
            topicId1: newTopicObject1,
            topicId2: newTopicObject2,
            topicId3: newTopicObject3, 
        }
        store.getState().topics.topics = newState
        expect(store.getState().topics.topics).toEqual(newState)
    })
})


