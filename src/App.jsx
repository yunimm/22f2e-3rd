import './App.css';
import Button from './components/Button';
import ButtonText from './components/ButtonText';
import ButtonSelect from './components/ButtonSelect';
import Confluence from '../src/assets/image/logo/confluence-logo.png';
import Jira from '../src/assets/image/logo/jira-logo.png';
import ProgressBar from './components/ProgressBar';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <h1 className="text-Corange text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button text="Button" />
      <ButtonText text="下一步" />

      <div className="grid grid-cols-2 gap-5">
        <ButtonSelect text="這次我幫很多人救火耶!" />
        <ButtonSelect text="大家在開發上都會互相cover，任務都在時間內完成。" />
      </div>

      <img src={Confluence} alt="confluence-logo" />
      <img src={Jira} alt="jira-logo" />

      <ProgressBar />

      <Title text="這是一個標題" />
    </div>
  );
}

export default App;
