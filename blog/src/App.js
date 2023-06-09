import { createHashRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import SignInForm from "./components/LoginAuth/SignInForm";
import SignUpForm from "./components/LoginAuth/SignUpForm";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./components/AdminPanel/Dashboard/Dashboard";
import Upload from "./components/AdminPanel/Upload/ArticlesForm";
import Settings from "./components/AdminPanel/Settings/Settings";
import EditArticles from "./components/AdminPanel/Upload/EditArticles";
import UploadArticles from "./components/AdminPanel/Upload/EditArticles";
import ArticlePage from "./pages/ArticlePage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: "/articles",
          element: <HomePage />,
        },
        {
          path: "/articles/article/:articleid",
          element: <ArticlePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
          children: [
            { path: "/login/signin", element: <SignInForm /> },
            { path: "/login/signup", element: <SignUpForm /> },
          ],
        },
        {
          path: "admin-panel",
          element: <AdminPanel />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "upload",
              element: <Upload />,
              children: [
                { index: true, element: <UploadArticles /> },
                {
                  path: "/admin-panel/upload/edit/:articleId",
                  element: <EditArticles />,
                },
              ],
            },
            { path: "settings", element: <Settings /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
