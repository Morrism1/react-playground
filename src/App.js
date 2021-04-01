import MyComponent from './components/MyComponent';
import './App.css';

function App() {
  const onClickBtn = () => {
    console.log('button Clicked');
  };
  return (
    <div className='App'>
      <MyComponent title='React' onButtonClicked={onClickBtn} />
    </div>
  );
}

export default App;
