import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <>
      <Header />
      <Main 
      html="100%" 
      css="90%" 
      java="50%"
      react="50%"
      mysql="50%"
      node="90%"/>
      <Footer 
      instagram="https://www.instagram.com/mari_lima162/"
      gitHub="https://github.com/MarianaSLima"
      linkedIn="https://www.linkedin.com/in/mariana-dos-santos-lima-aa78921b9/"
      twitter="https://twitter.com/Mari__SLima"
      />
    </>
  );
}

export default App;
