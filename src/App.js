import { MainLayout } from './layouts/MainLayout';
import { MyBrandView } from './views/MyBrandView';
import { MyPublicationsView } from './views/MyPublications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { api } from "./api";

const App = () => {
  const [formState, setFormState] = useState([]);
  const [catOptions, setCatOptions] = useState({});
  const [langOptions, setLangOptions] = useState({});

  useEffect(() => {
    if (Object.values(langOptions).length === 0) {
      api.getLangs().then( res => setLangOptions(res));
    }
    if (Object.values(catOptions).length === 0) {
      api.getCategpriesToDisplay().then(categories => {
        setCatOptions(categories);
        Object.entries(categories).forEach(([, categoryValue], index) => {
          formState[index] = {
            Category: categoryValue,
            Concept: undefined,
            Caption: undefined,
          }
        });
      });
    }
  }, [catOptions, formState, langOptions]);

  return (
    <div className="w-full h-full">
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/brand">
              <MyBrandView 
                catOptions={catOptions}
                formState={formState}
                setFormState={setFormState}
              />
            </Route>
            <Route path="/publications">
              <MyPublicationsView
                catOptions={catOptions}
                langOptions={langOptions}
                formState={formState}
              />
            </Route>  
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
