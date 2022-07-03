import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import Entry from './pages/entry/Entry.page'


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        /dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
