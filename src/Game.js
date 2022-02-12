import {motion} from "framer-motion";

function Game({game}){
	return(
		<motion.div 
		layout 
		animate={{opacity: 1}} 
		initial={{opacity: 0}} 
		exit={{opacity: 0}}
		transition={{ duration: 0.4}}
		>
			<h2>{game.title}</h2>
			<img src={"https://image.tmdb.org/t/p/w500" + game.backdrop_path} alt ="" />
		</motion.div>
	)
}

export default Game;