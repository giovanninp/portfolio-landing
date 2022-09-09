import styled from "styled-components";
import { Section } from "../molecules";
import ProjectItem, { IProjectCard } from "../molecules/ProjectItem";

interface IProjectsList {
  data: IProjectCard[];
}

const ProjectsList = (props: IProjectsList) => {
  const { data = [] } = props;
  return (
    <Content>
      {data.map((item) => (
        <ProjectItem {...item} key={item.name} />
      ))}
    </Content>
  );
};

const Content = styled(Section)`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.metrics.card.padding}px;
`;

export default ProjectsList;
