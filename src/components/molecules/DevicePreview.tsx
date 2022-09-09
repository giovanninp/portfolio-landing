import styled, { StyledProps } from "styled-components";
import Itheme from "../../theme/type";
import { DeviceFrame } from "../atoms";
import { variantType } from "../atoms/DeviceFrame";

type isShowingType = boolean;

interface IDevicePreview {
  isShowing?: isShowingType;
  children?: any;
  style?: StyledProps<any>;
  variant?: variantType;
}

const DevicePreview = (props: IDevicePreview) => {
  const { isShowing = false, children, style, variant } = props;
  return (
    <Container style={style}>
      <Frame {...{ isShowing, variant }}>{children}</Frame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.metrics.common.padding};
  overflow: hidden;
`;

interface IFrame {
  isShowing?: isShowingType;
  theme: Itheme;
}

const Frame = styled(DeviceFrame)`
  transform: translateY(
    ${({ isShowing = false }: IFrame) => (!isShowing ? "100%" : "0%")}
  );
`;

export default DevicePreview;
