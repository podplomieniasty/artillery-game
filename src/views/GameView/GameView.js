
import Header from "../../components/Header/Header";
import Battlefield from "../../components/Battlefield/Battlefield";
import Messenger from "../../components/Messenger/Messenger";

import styles from './GameView.module.scss';

const GameView = ({gameSettings, messages}) => {
	
  	return(
		  <div className={styles.wrapper}>
			<Header  />
			<Battlefield {...gameSettings}/>
			<Messenger messages={messages}/>
		  </div>
		  
	  )
};

export default GameView;
