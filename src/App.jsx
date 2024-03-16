import { useScrollToTop } from "./hook/useScrollToTop";
import { mainRoutes } from "./routes/main-routes";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { userRoutes } from "./routes/user-routes";
import { Login } from "./page/login";
import { UserLayout } from "./layout/user-layout";
function App() {
  useScrollToTop();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRoutes?.map((item, i) => (
            <Route
              index={item.path ? false : true}
              path={item?.path}
              key={i}
              element={<item.component />}
            />
          ))}
          <Route path="login" element={<Login />} />
          <Route path="user" element={<UserLayout />}>
            {userRoutes?.map((item, i) => (
              <Route
                index={item.path ? false : true}
                path={item?.path}
                key={i}
                element={<item.component />}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
