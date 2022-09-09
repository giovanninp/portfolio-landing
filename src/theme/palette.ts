type hexColor = `#${string}`;

export interface Ipallete {
  header: hexColor;
  body: hexColor;
  primary: hexColor;
  secondary: hexColor;
  card: hexColor;
}

const light: Ipallete = {
  header: "#FFB35B",
  body: "#FFFFFF",
  primary: "#000000",
  secondary: "#FFFFFF",
  card: "#fafafa",
};

const dark: Ipallete = {
  header: "#FFB35B",
  body: "#474747",
  primary: "#000000",
  secondary: "#FFFFFF",
  card: "#969696",
};

const palletes: { dark: Ipallete; light: Ipallete } = { dark, light };

export default palletes;
