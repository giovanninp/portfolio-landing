import styled, { StyledProps } from "styled-components";
import Itheme from "../../theme/type";

export type variantType = "mobile" | "desktop";

interface IDeviceFrame {
  variant?: variantType;
  children?: any;
  style?: StyledProps<any>;
}

const DeviceFrame = (props: IDeviceFrame) => {
  const { variant = "mobile", children, style } = props;
  return (
    <Container variant={variant} style={style}>
      {children}
    </Container>
  );
};

interface IContainer {
  theme: Itheme;
  variant: variantType;
}

const Container = styled.div`
  height: ${({ theme, variant }: IContainer) =>
    theme.metrics.deviceFrame[variant].height}px;
  width: ${({ theme, variant }: IContainer) =>
    theme.metrics.deviceFrame[variant].width}px;
  border-radius: ${({ theme }) => theme.metrics.deviceFrame.borderRadius}px;
  border: 9px solid ${({ theme }) => theme.pallete.header};
  background-color: #c8c8c8;
`;

export default DeviceFrame;
