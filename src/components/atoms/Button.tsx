import styled from "styled-components";
import Itheme from "../../theme/type";

type colorType = "primary" | "secondary";

interface IButton {
  children: any;
  color?: colorType;
}

const Button = (props: IButton) => {
  const { children, color = "primary" } = props;
  return <Container color={color}>{children}</Container>;
};

const Container = styled.button`
  height: ${({ theme }) => theme.metrics.button.height}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${({ theme }) => theme.metrics.button.padding}px;
  background-color: ${({ theme, color }: { theme: Itheme; color: colorType }) =>
    theme.pallete[color]};
  border-radius: ${({ theme }) => theme.metrics.button.height / 2}px;
  border: 0;
  cursor: pointer;
`;

export default Button;
