import ActionKey from "../ActionKey/ActionKey";
import { Display } from "../Display/Display";
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
          <Display phoneNumber="699542428" />

          <ActionKey text="Call" className="call" />
          <ActionKey text="Hang up" className="hang-up" />
        </div>
      </main>
    </>
  );
};

export default App;
