import Home from '../Pages/Home/Home/Home';
import SingleNote from '../Pages/Home/Notes/SingleNote';

const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../Layout/Main');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/note/:id',
        element: <SingleNote></SingleNote>,
        loader: ({ params }) =>
          fetch(`https://notebook-server-pi.vercel.app/note/${params.id}`),
      },
    ],
  },
]);
