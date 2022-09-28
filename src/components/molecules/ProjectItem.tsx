import { useState } from "react";
import styled from "styled-components";
import { Badge, Card, DeviceFrame, Title } from "../atoms";
import { imageType } from "../atoms/Badge";

export interface IProjectCard {
  name?: string;
  description?: string;
  badges?: imageType[];
  frames?: string[];
  platform?: 'desktop' | 'mobile'
}

const ProjectItem = (props: IProjectCard) => {
  const { name, description, badges = [], platform = 'desktop' } = props;
  const [showPreview, setShowPreview] = useState(false);

  const handleMouseIn = () => setShowPreview(true);
  const handleMouseOut = () => setShowPreview(false);

  return (
    <Container onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
      <Info>
        <div className="main">
          <Name>{name}</Name>
          <Description>{description}</Description>
        </div>
        <Badges>
          {badges.map((badge) => (
            <Badge image={badge} key={badge} />
          ))}
        </Badges>
      </Info>
      <Preview>
        <SlidingDevice>
          <Frame isShowing={showPreview}>
            <DeviceFrame variant={platform} />
          </Frame>
        </SlidingDevice>
      </Preview>
    </Container>
  );
};

const Container = styled(Card)`
  height: 216px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: flex-start;

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Name = styled(Title).attrs({ size: "h2", color: "primary" })`
  font-style: italic;
  font-weight: bold;
`;
const Description = styled(Title).attrs({ size: "h4", color: "primary" })`
  font-style: italic;
`;

const Badges = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: ${({ theme }) => theme.metrics.common.padding}px;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1 0;
  position: relative;
`;

const SlidingDevice = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.metrics.common.padding};
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

interface IFrame {
  isShowing?: boolean;
}

const Frame = styled.div`
  transform: translateY(${({ isShowing }: IFrame) => (!isShowing ? 65 : 0)}%);
  transition: transform 0.5s;
`;

export default ProjectItem;
