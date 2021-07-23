import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import {useLocation} from 'react-router';
import {fadeIn} from '../animations';
function Home() {
  //getting current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  //loading games from the store
  const dispatch = useDispatch();

  useEffect(() => {
    //when component load
    dispatch(loadGames());
  }, [dispatch]); //!React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array  react-hooks/exhaustive-deps -->error to solve this //* we use "[dispatch]"
  //get that data back
  const {popular, upcoming, newGames, searched} = useSelector(
    (state) => state.games
  );
  console.log(upcoming);
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        {/* this should have a toggle  */}
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div>
            <h2>Search Results</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 1.5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;
export default Home;
