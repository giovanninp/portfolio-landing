import { Imetrics } from "./metrics";
import { Ipallete } from "./palette";
import { Itypography } from "./typography";

interface Itheme {
  metrics: Imetrics;
  typography: Itypography;
  pallete: Ipallete;
}

export default Itheme;
