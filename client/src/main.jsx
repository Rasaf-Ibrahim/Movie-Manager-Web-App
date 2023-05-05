import React from 'react'
import ReactDOM from 'react-dom/client'

// styled-components
import  '@/styles/index.css'


// MuiTheme
import MuiTheme from '@/styles/mui-theme/mui-theme'



// App.jsx
import App from './App';

// @tanstack/react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot
  (document.getElementById('root'));
root.render(

   <QueryClientProvider client={queryClient}>
        <MuiTheme>
                <App />
        </MuiTheme>
  </QueryClientProvider>

);