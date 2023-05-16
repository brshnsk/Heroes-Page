import { Navbar } from "../ui/Components/Navbar";

import { LoginPage } from "../auth/pages/LoginPage";
import HeroesRouter from "../heroes/routes/HeroesRouter";
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route 
          path="login" 
          element={
          <PublicRouter>
            <LoginPage/>
          </PublicRouter>
          } 
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
}
