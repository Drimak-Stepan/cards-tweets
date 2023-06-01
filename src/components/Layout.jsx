import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from "../shared/components/Container";
import NavBar from "./NavBar";

export const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
