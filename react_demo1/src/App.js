import LessonOneComponentWithValuePassedIn from "./LessonOneComponentWithValuePassedIn";
import LessonTwoComponentThatUsesState from "./LessonTwoComponentThatUsesState";

function App() {
  return (
    <div>
      {}
      <LessonOneComponentWithValuePassedIn valuePassedIn={5} />
      <LessonTwoComponentThatUsesState />
    </div>
  );
}

export default App;
