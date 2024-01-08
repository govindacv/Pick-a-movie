import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PickAMovieForMe from "../components/PickAMovieForMe";
import SearchResult from "../components/SearchResult";
import { SearchedGener } from "../components/SearchedGener";
import { FullInfoOfGener } from "../components/FullInfoOfGener";
import { FullInFoOfSeledtedFromSearch } from "../components/FullInFoOfSeledtedFromSearch";
import { SearchedActor } from "../components/SearchedActor";
import { FullInfoOfSelectedFromActors } from "../components/FullInfoOfSelectedFromActors";
import { BlogInfo } from "../components/BlogInfo";
import Login from "../components/Login";
import { PickedMovie } from "../components/PickedMovie";
import { Question } from "../components/Question";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PickAMovieForMe />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/searchedMovie",
        element: <SearchResult />,
      },
      {
        path: "/:searchedGener",
        element: <SearchedGener />,
      },
      {
        path: "/gener/:gener/:item",
        element: <FullInfoOfGener />,
      },
      {
        path: "searchedmovie/fullInFoOfSelectedFromSearch",
        element: <FullInFoOfSeledtedFromSearch />,
      },
      {
        path: "/actor",
        element: <SearchedActor />,
      },
      {
        path: `actors/selectedMovie`,
        element: <FullInfoOfSelectedFromActors />,
      },
      {
        path: "/blog",
        element: <BlogInfo />,
      },
      {
        path: "/pickedMovie",
        element: <PickedMovie />,
      },
      {
        path: "/q",
        element: <Question />,
      },
    ],
  },
]);

export default AppRouter;
