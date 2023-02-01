import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <>
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <Display />

          <a href="call" className="call">
            Call
          </a>

          <a href="hang-up" className="hang active">
            Hang up
          </a>
        </div>
      </main>
    </>
  );
};

export default App;
