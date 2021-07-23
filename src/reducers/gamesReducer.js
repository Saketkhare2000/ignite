const initState = {
  popular: [], //empty because we are gonna have a lot of games
  newGames: [],
  upcoming: [],
  searched: [],
};

//this reducer will contain all the games
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    case 'CLEAR_SEARCHED':
      return {
        ...state,
        searched: [],
      };
    default:
      return {...state};
  }
};

//action ---> it describes whats gonna happen

//dispatch --> you sending the action to the reducer

//action creator ---> it is a fucntion that returns an action

//redux thunk allows us to do async actions to  redux

export default gamesReducer;
