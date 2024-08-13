import { ReactFloatingBalloons } from "react-floating-balloons";

import "./App.css";

export default function App() {
  const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

  return (
    <div className="App">
      {/* <h1>ReactFloatingBalloons 🎈</h1> */}
      {/* {supportsTouch ? (
        <h2>Click the balloons to pop 💥</h2>
      ) : (
        <h2>Double Click the balloons to pop 💥</h2>
      )} */}
      <ReactFloatingBalloons
        count={30}
        msgText="Yayy!!"
        colors={["yellow", "purple", "red", "black","green","blue"]}
        popVolumeLevel={1}
      />
    </div>
  );
}
