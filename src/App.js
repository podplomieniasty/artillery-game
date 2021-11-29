import Header from "./components/Header/Header";
import styles from "./App.css";
import Battlefield from "./components/Battlefield/Battlefield";
import Messenger from "./components/Messenger/Messenger";


const App = () => {
  	return(
		  <>
			<Header />
		  	<Battlefield />
			<Messenger />
		  </>
		  
	  )
};

export default App;
