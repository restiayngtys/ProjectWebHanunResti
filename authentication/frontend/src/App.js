import React from 'react';
import Login from './components/Login';
import Daftar from './components/Daftar';
import Dashboard from './components/Dashboard';
import { Route, Switch  } from 'react-router-dom';
import LupaPassword from './components/LupaPassword';
import ResetPassword from './components/ResetPassword';
import Materi from './components/Materi';
import Vocabulary from './components/Vocabulary';
import Tenses from './components/Tenses';
import Pronoun from './components/Pronoun';
import ToBe from './components/ToBe';
import FreeCourse from './components/FreeCourse';
import CourseDasar from './components/CourseDasar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/daftar" component={Daftar}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/materi" component={Materi}></Route>
        <Route path="/vocabulary" component={Vocabulary}></Route>
        <Route path="/tenses" component={Tenses}></Route>
        <Route path="/pronoun" component={Pronoun}></Route>
        <Route path="/tobe" component={ToBe}></Route>
        <Route path="/free_course" component={FreeCourse}></Route>
        <Route path="/course_dasar" component={CourseDasar}></Route>
        <Route path="/lupa-password" component={LupaPassword}></Route>
        <Route path="/resetpassword/:token" component={ResetPassword}></Route>
      </Switch>
    </div>
  );
}

export default App;
