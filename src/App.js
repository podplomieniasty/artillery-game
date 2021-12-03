import Header from "./components/Header/Header";
import Battlefield from "./components/Battlefield/Battlefield";
import Messenger from "./components/Messenger/Messenger";
import { useState } from "react";
import styles from './App.module.scss';

const msgArray = [
    "Come in soldier, this is the HQ speaking. There's an enemy base hidden somewhere around. Navigate the artillery cannon, locate the base and destroy it, over and out.",
];

const App = () => {
	const [isGameOn, setGameState] = useState(false);
	const [messages, setMessages] = useState(msgArray); // messages to display
	const [baseLocation] = useState([5,5]);
	const [tileboard, setTileboard] = useState([]);
	const [isGameOver, setGameStatus] = useState(false);

	const difficulty = 10;

	const startGame = () => {
		const tiles = [];
		
		for(let i = 0; i < difficulty*10; i++)
    	{
			const tileColor = randGreenHex();
			const tile = {
				backgroundColor: tileColor,
			};

			tiles.push(tile);
    	}	
		setTileboard(tiles);
		console.log(tiles);
		setGameState(true);
	}

	const randGreenHex = () => {
		let hex = "#00";
		let num = Math.floor(Math.random() * 127) + 128;

		num = num.toString(16);
		hex += num.length === 1 ? "0" + num : num;
        
        hex += "00";
		return hex;
	};

	
	const retrieveMessage = (shotStats) => {
		const msg = shotStats.isHit ? 
			`Good job, soldier. The hidden base located at X:${shotStats.shotX} &  Y:${shotStats.shotY} has been destroyed. Your training is complete.`
			: `The shot missed at X:${shotStats.shotX} & Y:${shotStats.shotY}, soldier. The enemy base is located ${shotStats.distance} meters away.`;
		
		setMessages([msg, ...messages]);	
		}


	const returnTile = (e) => {

		/* finds the index of the element which triggered the event and 
		   calculates it's distance from the base
		*/
		e.preventDefault();

		const trgt = e.currentTarget;
		const elements = Array.from(e.currentTarget.parentElement.children);
		const trgtIndex = elements.findIndex(x => x === e.currentTarget);
		trgt.style.backgroundColor = 'red';
		console.log(trgt);

		const coords = [Math.floor(trgtIndex/10), trgtIndex%10];
		
		const cX = (baseLocation[0] - coords[0])*(baseLocation[0] - coords[0]);
        const cY = (baseLocation[1] - coords[1])*(baseLocation[1] - coords[1]);
        const distance = Math.round(Math.sqrt(cX + cY));

        const isHit = distance === 0 ? true : false;
        
        const shotStats = {
            isHit: isHit,
            shotX: coords[0]+1,
            shotY: coords[1]+1,
            distance: distance,
        }
        retrieveMessage(shotStats);
		setGameStatus(isHit);

	}

  	return(
		  <div className={styles.wrapper}>
			<Header />
		  	{!isGameOn ? (
				  <button className={styles.startGameBtn} onClick={startGame}>Start game</button>
			  ) : (
				<>
					<Battlefield difficulty={10} tiles={tileboard} onShot={returnTile} isHit={isGameOver}/>
					<Messenger messages={messages}/>
				</>
			  )}
			
		  </div>
		  
	  )
};

export default App;
