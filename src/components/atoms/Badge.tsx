import styled from "styled-components";

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
  return <Container />;
};

const Container = styled.div`
  height: ${({ theme }) => theme.metrics.badge.size}px;
  width: ${({ theme }) => theme.metrics.badge.size}px;
  border-radius: ${({ theme }) => theme.metrics.badge.size / 2}px;
  box-shadow: 2px 2px 2px #afaeae;
  background-color: ${({ theme }) => theme.pallete.card};
`;

export default Badge;
