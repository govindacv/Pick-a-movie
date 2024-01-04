import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './appRouter/AppRouter.tsx'
import { Provider } from 'react-redux'
import Store from './dux/Store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
)
