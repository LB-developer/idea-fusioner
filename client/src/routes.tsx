import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import App from './App'
import React from "react"

export const routes = createRoutesFromElements(
  <Route path="/" index element={<App />}>
  </Route>,
)

export const router = createBrowserRouter(routes)
