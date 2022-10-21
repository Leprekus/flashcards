import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectQuizIds, selectTopics } from "./topicsSlice";

export default function Topic() {
  const topics = useSelector(selectTopics); // replace this with a call to your selector to select all the topics in state
  const quizzes = useSelector(selectQuizIds); // replace this with a call to your selector to select all the quizzes in state
  //inndex topic in state
  let { topicId } = useParams();
  const topic = topics[topicId];
  //topic references quizzes with id
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
