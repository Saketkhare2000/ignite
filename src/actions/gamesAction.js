import axios from 'axios';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../api';

//action creator

//when we use  thunk and we want to use async fucntion we have to add another arrow fucntion
export const loadGames = () => async (dispatch) => {
  //fetch with axios here
  //here populargamesURL will return a string url only
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  //after it fetches it, it dispatches the data to the reducer
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  });
};
