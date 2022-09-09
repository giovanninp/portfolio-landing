import React from "react";
import { Header, ProjectsList } from "./components/organisms";
import TabNavigation from "./components/templates/TabNavigation";
import ThemeProvider from "./theme/Provider";

const App = () => {
  return (
    <ThemeProvider>
      <Header title="GIOVANNI NETTO PROCIDA" subtitle="DEV FRONT-END" />
      <TabNavigation
        options={[
          { title: "Projetos", key: "projects" },
          { title: "Curriculo", key: "curriculum" },
        ]}
      >
        <ProjectsList
          data={[
            {
              name: "Train N Go",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "NoPique",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "Eter",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "Concretiza",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "Evoé",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
          ]}
        />
        <ProjectsList
          data={[
            {
              name: "Train N Go",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "NoPique",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
            {
              name: "Concretiza",
              description:
                "Plataforma unificada para academias de pequeno e médio porte.",
              badges: [
                "react",
                "expo",
                "redux",
                "redux-saga",
                "styled-components",
              ],
            },
          ]}
        />
      </TabNavigation>
    </ThemeProvider>
  );
};

export default App;
