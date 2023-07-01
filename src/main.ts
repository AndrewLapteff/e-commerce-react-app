import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(
  document.getElementById('app') || document.createElement('div')
)
root.render(React.createElement(App, { app: this }, null))

