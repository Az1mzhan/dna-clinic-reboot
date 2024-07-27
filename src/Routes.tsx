import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

const MainPage = lazy(() =>
  import("./pages/MainPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const MedicsPage = lazy(() =>
  import("./pages/MedicsPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback={<CircularProgress />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="medics"
        element={
          <Suspense fallback={<CircularProgress />}>
            <MedicsPage />
          </Suspense>
        }
      />
    </Route>
  )
);
