import styled, { StyledProps } from "styled-components";
import Itheme from "../../theme/type";

interface ITitle {
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
  color?: "primary" | "secondary";
  style?: StyledProps<any>;
}

const Title = styled.div`
  font-size: ${({ theme, size = "h1" }: { theme: Itheme } & ITitle) =>
    theme.typography[size]}px;
  color: ${({ theme, color = "primary" }: { theme: Itheme } & ITitle) =>
    theme.pallete[color]};
`;

export default Title;
