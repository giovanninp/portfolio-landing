import styled from "styled-components";
import icons from "../../assets/icons";

export type imageType =
  | "react"
  | "expo"
  | "redux"
  | "redux-saga"
  | "styled-components";

interface IBadge {
  image?: imageType;
}

const Badge = (props: IBadge) => {
  const { image = 'react' } = props;
  const imagePath = icons[image];

  return <Container src={imagePath} />;
};

const Container = styled.img`
  height: ${({ theme }) => theme.metrics.badge.size}px;
  width: ${({ theme }) => theme.metrics.badge.size}px;
  border-radius: ${({ theme }) => theme.metrics.badge.size / 2}px;
  box-shadow: 2px 2px 2px #afaeae;
  background-color: ${({ theme }) => theme.pallete.card};
  object-fit: contain;
  padding: 3px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.pallete.card};
`;

export default Badge;
