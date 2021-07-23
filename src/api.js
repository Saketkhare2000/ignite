//Base URl

// in this file all the logic for API is added

const base_url = 'https://api.rawg.io/api/'; // this is the base url
// const apiKey = '0abeb377c00d448aad7979a7dc72e34f';
//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1; // getting the month

  //if month jan-oct i want to get "05" or "06" and not "5" or "6"
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate(); // getting the day

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//fetch games from last year to current year
const popular_games = `games?key=0abeb377c00d448aad7979a7dc72e34f&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//fetching new games
const upcoming_games = `games?key=0abeb377c00d448aad7979a7dc72e34f&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//fetching new games
const new_games = `games?key=0abeb377c00d448aad7979a7dc72e34f&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
//final games fetching link
export const popularGamesURL = () => `${base_url}${popular_games}`; //---> this is will export the final url which will fetch the games

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
