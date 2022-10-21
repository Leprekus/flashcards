import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";

//Redux Hooks 
import { useSelector, useDispatch } from 'react-redux'

//STORE 
import { 
  addTopic,
  editTopic,
  deleteTopic
 } 
 from "../features/topics/topicsSlice";
 

export default function NewTopicForm() {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  //hooks
  const history = useHistory();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
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
    const topicId = uuidv4()
    const topicObject = {
    
        id: topicId,
        name: name,
        icon: icon,
        quizIds: [] 
      
    }
  
    // dispatch your add topic action here
    history.push(ROUTES.topicsRoute());
    dispatch(addTopic(topicObject))
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center">Add Topic</button>
      </form>
    </section>
  );
}
