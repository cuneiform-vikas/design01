import styled from "styled-components";
import { SplitScreen, StyledBoxProps } from "../types";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Box = styled.div<StyledBoxProps>`
  flex: ${(props) => props.weight};
  background:${(props) => props.color};
`;

const SplitScreens = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreen) => {
  const [left, right]: any = children;

  return (
    <Container>
      <Box color="lightpink" weight={leftWeight}>{left}</Box>
      <Box color="antiquewhite" weight={rightWeight}>{right}</Box>
    </Container>
  );
};

export default SplitScreens;
