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
  import("./pages/medics-page/MedicsPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const ServicesPage = lazy(() =>
  import("./pages/services-page/ServicesPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const ReviewsPage = lazy(() =>
  import("./pages/reviews-page/ReviewsPage").catch((err) => {
    console.error(err);
    return { default: CircularProgress };
  })
);

const AboutUsPage = lazy(() =>
  import("./pages/about-us-page/AboutUsPage").catch((err) => {
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
      <Route
        path="services"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ServicesPage />
          </Suspense>
        }
      />
      <Route
        path="reviews"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ReviewsPage />
          </Suspense>
        }
      />
      <Route
        path="about-us"
        element={
          <Suspense fallback={<CircularProgress />}>
            <AboutUsPage />
          </Suspense>
        }
      />
    </Route>
  )
);
