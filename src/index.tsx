import { render } from "solid-js/dom";
import {
  ShowRoute,
  NavLink,
  RouterProvider,
  browserPathRouting,
} from "@rturnq/solid-router";
import { Component } from "solid-js";

const App: Component = () => {
  return (
    <RouterProvider handler={browserPathRouting()}>
      <NavLink href="/" end>
        Home
      </NavLink>
      <NavLink href="/about">About</NavLink>

      <ShowRoute path="/" end>
        <h1>Home</h1>
      </ShowRoute>
      <ShowRoute path="/about">
        <h1>About</h1>
      </ShowRoute>
    </RouterProvider>
  );
};

render(() => App, document.getElementById("app"));
