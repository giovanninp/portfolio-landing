import styled, { StyledProps } from "styled-components";
import trainNGo from "../../assets/screens/train-n-go";
import Itheme from "../../theme/type";

export type variantType = "mobile" | "desktop";

interface IDeviceFrame {
  variant?: variantType;
  children?: any;
  style?: StyledProps<any>;
  projectId?: string;
  preview?: string;
}

const DeviceFrame = (props: IDeviceFrame) => {
  const { variant = "mobile", children, style } = props;
  return (
    <Container variant={variant} style={style} src={trainNGo[variant]['login']}>
      {children}
    </Container>
  );
};

interface IContainer {
  theme: Itheme;
  variant: variantType;
}

const Container = styled.img`
  height: ${({ theme, variant }: IContainer) =>
    theme.metrics.deviceFrame[variant].height}px;
  width: ${({ theme, variant }: IContainer) =>
    theme.metrics.deviceFrame[variant].width}px;
  border-radius: ${({ theme }) => theme.metrics.deviceFrame.borderRadius}px;
  border: 9px solid ${({ theme }) => theme.pallete.header};
  background-color: #c8c8c8;
  object-fit: cover;
`;

export default DeviceFrame;
