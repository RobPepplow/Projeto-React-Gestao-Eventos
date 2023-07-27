import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './routes/Home';
import NewParty from './routes/NewParty';
import Services from './routes/Services';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path:'/',
				element: <Home />
			},
			{
				path:'/new',
				element: <NewParty />
			},
			{
				path:'/services',
				element:<Services />
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
