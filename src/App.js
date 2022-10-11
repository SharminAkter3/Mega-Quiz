import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./Components/Main/Main";
import Topics from "./Components/Topics/Topics";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import Quiz from './Components/Quiz/Quiz';
import Question from './Components/Question/Question';
import ErrorPage from './ErrorPage/ErrorPage';
import Item from './Components/Item/Item';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: 'quiz/:id',
          element: <Quiz></Quiz>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }

        },

        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
