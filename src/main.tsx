import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Layout from './Layout.tsx'
import Home from './pages/Home.tsx'
import Searching from './pages/Searching.tsx'
import About from './pages/About.tsx'
import Sorting from './pages/Sorting.tsx'
import Race from './pages/race/Race.tsx'

import {
  ArraysPage,
  StacksPage,
  QueuesPage,
  LinkedListsPage
} from './pages/data-structures'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "algorithms/searching", element: <Searching /> },
      { path: "algorithms/sorting", element: <Sorting /> },
      { path: "race", element: <Race /> },

      // Data Structures
      { path: "data-structures/arrays", element: <ArraysPage /> },
      { path: "data-structures/queues", element: <QueuesPage /> },
      { path: "data-structures/stacks", element: <StacksPage /> },
      { path: "data-structures/linked-lists", element: <LinkedListsPage /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
