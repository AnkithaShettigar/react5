import './App.css';
import CommentsCount from './components/HOC/CommentsCount';
import EnhancedLikes from './components/HOC/LikesCount';
import NormalComponent from './components/PureComponents/NormalComponent';
import PureComponents from './components/PureComponents/PureComponents';


function App() {
  return (
    <div className="App">
     <h1 >Normal Component</h1>
     <NormalComponent/>
     <h1>Pure Component</h1>
     <PureComponents/>
     <h1>Higher Order Component</h1>
     <EnhancedLikes/>
     <CommentsCount/>
    </div>
  );
}

export default App;
