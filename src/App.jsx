import { useScrollToTop } from "./hook/useScrollToTop";
import { mainRoutes } from "./routes/main-routes";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { userRoutes } from "./routes/user-routes";
function App() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {mainRoutes?.map((item, i) => (
            <Route
              index={item.path ? false : true}
              path={item?.path}
              key={i}
              element={<item.component/>}
            />
          ))}
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
