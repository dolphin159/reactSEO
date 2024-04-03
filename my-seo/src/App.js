import logo from './logo.svg';
import './App.css';
import HelmetTag from './helmet.tsx';

function App() {
  return (
    <div className="App">
      <HelmetTag
        keywords="야구"
        title="KBO"
        description="한화가 KBO에서 단독 선두로 1등을 달리고 있다."
        url="https://www.chosun.com/sports/baseball/2024/03/30/BLAZ2JKYMZGI5BZD6IDQMSSRG4/"
        image="https://images.chosun.com/resizer/ElW61MYEGOZfwD4oBJfsAWRnc4Q=/720x703/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ZJ73EGQEEOTUSTK5S2T6LDSFVQ.jpg"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
