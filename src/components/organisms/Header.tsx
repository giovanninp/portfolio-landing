import styled from "styled-components";
import { Button } from "../atoms";
import Title from "../atoms/Title";
import { Section } from "../molecules";

interface IHeader {
  title: string;
  subtitle: string;
}

const Header = (props: IHeader) => {
  const { title, subtitle } = props;
  return (
    <Container>
      <Section>
        <Main>
          <Name>{title}</Name>
          <Description>{subtitle}</Description>
        </Main>
        <Actions>
          <Button>
            <ButtonTitle>Contato</ButtonTitle>
          </Button>
        </Actions>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  height: 286px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.header};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Actions = styled.div`
  display: flex;
  align-self: flex-end;
`;

const Name = styled(Title).attrs({ size: "h1" })`
  font-style: italic;
  font-weight: 800;
`;

const Description = styled(Title).attrs({ size: "h3" })`
  font-style: italic;
`;

const ButtonTitle = styled(Title).attrs({ size: "h4", color: "secondary" })`
  font-weight: bold;
`;

export default Header;
