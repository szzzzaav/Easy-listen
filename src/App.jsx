import { lazy } from "react";

import EasyListen from "./pages/EasyListen";
import GlobalStyles from "./styles/GlobalStyles";
import BgLoader from "./ui/BgLoader";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionLoaderContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const Create = lazy(() => import("./pages/Create"));
const PersonalCenter = lazy(() => import("./pages/PersonalCenter"));
const ViewUser = lazy(() => import("./pages/ViewUser"));
const Music = lazy(() => import("./pages/Music"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AudioPlayer = lazy(() => import("./pages/AudioPlayer"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //缓存中的数据保持新鲜的时间
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <TransitionProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <BgLoader />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="create" element={<Create />} />
              <Route path="music/:mid" element={<Music />} />
            </Route>
            <Route index element={<Navigate replace to="easyListen" />} />
            <Route path="easyListen" element={<EasyListen />} />
            <Route path="/view/user/:uid" element={<ViewUser />} />
            <Route path="/user/:uid" element={<PersonalCenter />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="player" element={<AudioPlayer />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </TransitionProvider>
  );
}

export default App;
