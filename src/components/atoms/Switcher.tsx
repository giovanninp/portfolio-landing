import styled from "styled-components";
import Itheme from "../../theme/type";
import Title from "./Title";

type optionType = {
  title: string;
  key: string;
};

interface ISwitcher {
  options: optionType[];
  onPress: Function;
  currentIdx?: number;
}

const Switcher = (props: ISwitcher) => {
  const { options, onPress, currentIdx = 0 } = props;
  const qty = options.length ?? 0;
  return (
    <Container>
      <Rail>
        <Indicator qty={qty} selectedIdx={currentIdx} />
      </Rail>
      {options.map((opt, idx) => (
        <OptionTitle
          key={opt.key}
          isSelected={currentIdx === idx}
          onClick={() => onPress(idx)}
        >
          {opt.title}
        </OptionTitle>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: ${({ theme }) => theme.metrics.button.height}px;
  border-radius: ${({ theme }) => theme.metrics.button.height / 2}px;
  display: flex;
  position: relative;
  border: 2px solid ${({ theme }) => theme.pallete.primary};
  background-color: ${({ theme }) => theme.pallete.primary};
  overflow: hidden;
  box-sizing: border-box;
`;

const Rail = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

const Indicator = styled.div`
  display: flex;
  flex: 0 0
    calc(100% / ${({ qty }: { selectedIdx: number; qty: number }) => qty});
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.header};
  z-index: 0;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.pallete.primary};
  border-radius: ${({ theme }) => theme.metrics.button.height / 2}px;
  transform: translateX(
    calc(
      100% *
        ${({ selectedIdx }: { selectedIdx: number; qty: number }) =>
          selectedIdx}
    )
  );
  transition: transform 0.2s;
`;

const OptionTitle = styled(Title).attrs(
  ({ isSelected }: { isSelected: boolean }) => ({
    size: "h4",
    color: isSelected ? "primary" : "secondary",
  })
)`
  display: flex;
  font-weight: bold;
  flex: 1 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  padding: 0
    ${({ theme }: { theme: Itheme; isSelected: boolean }) =>
      theme.metrics.button.padding}px;
  cursor: pointer;
  transition: color 0.2s;
`;

export default Switcher;
