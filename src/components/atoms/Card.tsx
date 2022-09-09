import styled from "styled-components";

const Card = styled.div`
  padding: ${({ theme }) => theme.metrics.card.padding}px;
  border-radius: ${({ theme }) => theme.metrics.card.borderRadius}px;
  background-color: ${({ theme }) => theme.pallete.card};
  box-shadow: 1px 1px 5px #afafaf;
  box-sizing: border-box;
`;

export default Card;
