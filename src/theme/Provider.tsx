import { ThemeProvider } from "styled-components";
import palletes, { Ipallete } from "./palette";
import metrics, { Imetrics } from "./metrics";
import typography, { Itypography } from "./typography";
import { useMemo } from "react";
import Itheme from "./type";

interface IProvider {
  children: any;
}

declare module "styled-components" {
  export interface DefaultTheme {
    metrics: Imetrics;
    typography: Itypography;
    pallete: Ipallete;
  }
}

const getTheme = (isDark: boolean = false): Itheme => ({
  metrics,
  typography,
  pallete: palletes[isDark ? "dark" : "light"],
});

const Provider = (props: IProvider) => {
  const { children } = props;
  const theme = useMemo(() => getTheme(), []);

  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

export default Provider;
