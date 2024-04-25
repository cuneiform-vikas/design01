import styled from "styled-components";
import { splitComponents } from "../types";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Box = styled.div`
  flex: 1;
`;

const SplitScreens = ({ left: Left, right: Right }: splitComponents) => {
  return (
    <Container>
      <Box>
        <Left />
      </Box>
      <Box>
        <Right />
      </Box>
    </Container>
  );
};

export default SplitScreens;
