import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PageLoader } from "./layout/page-loader/PageLoader";

const MainPage = lazy(() =>
  import("./pages/MainPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

const MedicsPage = lazy(() =>
  import("./pages/medics-page/MedicsPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

const ServicesPage = lazy(() =>
  import("./pages/services-page/ServicesPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

const ReviewsPage = lazy(() =>
  import("./pages/reviews-page/ReviewsPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

const AboutUsPage = lazy(() =>
  import("./pages/about-us-page/AboutUsPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

const NotFoundPage = lazy(() =>
  import("./pages/not-found-page/NotFoundPage").catch((err) => {
    console.error(err);
    return { default: PageLoader };
  })
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback={<PageLoader />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="medics"
        element={
          <Suspense fallback={<PageLoader />}>
            <MedicsPage />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        }
      />
      <Route
        path="reviews"
        element={
          <Suspense fallback={<PageLoader />}>
            <ReviewsPage />
          </Suspense>
        }
      />
      <Route
        path="about-us"
        element={
          <Suspense fallback={<PageLoader />}>
            <AboutUsPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
);
