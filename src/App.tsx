import React from "react";
import { Header, ProjectsList } from "./components/organisms";
import TabNavigation from "./components/templates/TabNavigation";
import ThemeProvider from "./theme/Provider";
import projects from './constants/projects';

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
          data={projects}
        />
        <>Comming soon</>
      </TabNavigation>
    </ThemeProvider>
  );
};

export default App;
