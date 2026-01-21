import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash dishes and dry them"/>
      <Task title="Laundry" deadline="Tomorrow"/>
      <Task title="Tidy" deadline="Today" description="Organize the living room"/>
    </div>
  );
}

export default App;
