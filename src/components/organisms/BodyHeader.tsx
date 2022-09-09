import styled from "styled-components";
import { Switcher } from "../atoms";
import { Section } from "../molecules";

interface IBodyHeader {
  current: number;
  onSelect: Function;
  options: { title: string; key: string }[];
}

const BodyHeader = (props: IBodyHeader) => {
  const { current, onSelect, options } = props;
  return (
    <Container>
      <Section>
        <Content>
          <Switcher options={options} onPress={onSelect} currentIdx={current} />
        </Content>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default BodyHeader;
