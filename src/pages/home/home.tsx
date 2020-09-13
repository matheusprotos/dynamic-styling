import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  height: 30px;
`;

const DynamicStyleContainer = styled.div`
  margin-top: 10px;
  height: ${(props) => props.style?.height};
  width: ${(props) => props.style?.width};
  background-color: ${(props) => props.color};
`;

const Home: React.FC = () => {
  const [color, setColor] = useState<string>(``);
  const [height, setHeight] = useState<string>(``);
  const [width, setWidth] = useState<string>(``);

  return (
    <Container>
      <Row>
        <p>Height: </p>
        <Input onBlur={(event: any) => setHeight(event.target.value)} />
        <p>Width: </p>
        <Input onBlur={(event: any) => setWidth(event.target.value)} />
        <p>Color: </p>
        <Input onBlur={(event: any) => setColor(event.target.value)} />
      </Row>
      <DynamicStyleContainer
        color={color}
        style={{
          height,
          width,
        }}
      ></DynamicStyleContainer>
    </Container>
  );
};

export default Home;
