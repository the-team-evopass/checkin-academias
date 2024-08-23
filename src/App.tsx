import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import './assets/styles/webkit/styleScrollBar.css'
import './assets/styles/webkit/styleAutocomplete.css'
import './assets/styles/app/styleApp.css'

export default function App() {

  if (process.env.NODE_ENV?.trim() === 'hmg') {
    console.log('%cAmbiente de homologação', 'color: green; font-size: 30px; font-weight: 800;');
  } else if (process.env.NODE_ENV?.trim() === 'prod') {
    console.log('%cAmbiente de produção', 'color: green; font-size: 30px; font-weight: 800;');
  } else {
    console.log('Variável de ambiente não reconhecida! prod usado como ambiente.');
  }

  return (
    <RouterProvider router={router} />
  );
}