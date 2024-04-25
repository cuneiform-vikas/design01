import SplitScreens from "./components/SplitScreens";

const LeftComponent = () => {
  return <div style={{backgroundColor:"darkgoldenrod"}}>left</div>;
};
const RightComponent = () => {
  return <div style={{backgroundColor:"lavender"}}>right</div>;
};

const App = () => {
  return <SplitScreens left={LeftComponent} right={RightComponent} />;
};

export default App;
