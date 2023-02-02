import ActionKey from "../ActionKey/ActionKey";
import { Display } from "../Display/Display";
import Info from "../Info/Info";
import Keyboard from "../Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <>
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
        <div className="actions">
          <Display />

          <ActionKey text="Call" className="call" />
          <ActionKey text="Hang up" className="hang-up" />
        </div>
      </main>
    </>
  );
};

export default App;
