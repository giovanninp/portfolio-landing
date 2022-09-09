import { Children, useState } from "react";
import styled from "styled-components";
import { Section } from "../molecules";
import { BodyHeader } from "../organisms";

interface ITabNavigation {
  options: { title: string; key: string }[];
  children: any;
  initialIdx?: number;
}

const TabNavigation = (props: ITabNavigation) => {
  const { options, children, initialIdx = 0 } = props;
  const [current, setCurrent] = useState(initialIdx);
  return (
    <Container>
      <BodyHeader onSelect={setCurrent} current={current} options={options} />
      <Content posix={current} pages={Children.count(children)}>
        {Children.map(children, (child, idx) => (
          <Page key={options[idx].key}>{child}</Page>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

interface IContent {
  pages: number;
  posix: number;
}

const Content = styled.div`
  width: calc(${({ pages }: IContent) => pages} * 100%);
  display: flex;
  flex-direction: row;
  transform: translateX(
    calc(-${({ posix, pages }: IContent) => (posix / pages) * 100}%)
  );
  transition: transform 0.5s;
`;

const Page = styled(Section)`
  display: flex;
  flex: 1 0;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default TabNavigation;
