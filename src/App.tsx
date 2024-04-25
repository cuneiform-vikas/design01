import SplitScreens from "./components/SplitScreens";

const LeftComponent = ({ name }: { name: string }) => {
  return <>{name}</>;
};
const RightComponent = ({ message }: { message: string }) => {
  return <>{message}</>;
};

const App = () => {
  return (
    <SplitScreens leftWeight={1} rightWeight={3}>
      <LeftComponent name="sidebar" />
      <RightComponent message="main content" />
    </SplitScreens>
  );
};

export default App;
