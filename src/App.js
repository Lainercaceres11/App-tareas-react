
import './App.css';
import ListaTareas from './componentes/ListTareas';
import logoTareas from './imagenes/app_tareas.jpg'

function App() {
  return (
    <div className="App">
      <div className="app-img">
        <img 
        src={logoTareas}
        className="logo"
        alt="logo de la app"
        />
      </div>

      <div className='lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>

    
     
    </div>
  );
}

export default App;
