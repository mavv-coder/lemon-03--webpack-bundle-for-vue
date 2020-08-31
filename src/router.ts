import Router, { RouteConfig } from "vue-router";
import { HomePageComponent } from "./components/home";
import { LoginPageComponent } from "./components/login";

interface BaseRoutes {
  root: string;
  home: string;
  login: string;
}

export const baseRoutes: BaseRoutes = {
  root: "/",
  home: "/home",
  login: "/login",
};

const routes: RouteConfig[] = [
  { path: baseRoutes.root, name: "root", redirect: baseRoutes.login },
  { path: baseRoutes.login, name: "login", component: LoginPageComponent },
  {
    path: baseRoutes.home,
    name: "home",
    component: HomePageComponent,
  },
];

export const router = new Router({
  routes,
});
