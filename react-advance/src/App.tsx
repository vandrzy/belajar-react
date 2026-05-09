// import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import authLoader from "./utils/authLoader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const User = lazy(() => import("./pages/User"));
const Blog = lazy(() => import("./pages/Blog"));

// function App() {
//   return (
//     <Suspense fallback={<div>loading ....</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>
//     </Suspense>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "auth",
        children: [
          {
            path: "register",
            element: (
              <Suspense>
                <Register />
              </Suspense>
            ),
          },
          {
            path: "login",
            element: (
              <Suspense>
                <Login />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "user",
        element: (
          <Suspense>
            <User />
          </Suspense>
        ),
        loader: authLoader,
      },
      {
        path: "blog",
        element: (
          <Suspense>
            <Blog />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
