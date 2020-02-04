import { Routes } from '@angular/router';
import { HomeRouters } from './home/home.router';
import { IndexRoutes } from './index/index.router';
import { NoPageRoutes } from './page-not-found/no-page.routes';
import { Route } from '@angular/compiler/src/core';

export const routes:Route[] = [
    ...IndexRoutes, ...HomeRouters, ...NoPageRoutes
];
