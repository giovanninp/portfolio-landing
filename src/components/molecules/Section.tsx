import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex: 0 1 900px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.card.padding}px;
`;

export default Section;
