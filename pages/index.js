import { Anchor, Box, Button, Heading, Paragraph } from "grommet";
import styled from "styled-components";

const BoxStyled = styled(Box)`
  background-color: #bbbbbb;
  border: 3px solid black;
  padding: 2rem;
  margin: 5rem;
  align-items: center;
`;
const ButtonStyled = styled(Button)`
  background-color: black;
  color: white;
  border: 3px solid white;
  padding: 1rem;
`;

export default function Home() {
  return (
    <BoxStyled>
      <Heading>Grommet styled is clean!</Heading>
      <Paragraph>
        Find out more at{" "}
        <Anchor href="https://v2.grommet.io/">grommet.io</Anchor>
{" "}and{" "}<Anchor href="https://styled-components.com/">styled-components</Anchor>
      </Paragraph>
    <ButtonStyled href="https://v2.grommet.io">Grommet</ButtonStyled>
    </BoxStyled>
  );
}
