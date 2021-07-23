import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
const GameDetail = ({pathId}) => {
  const history = useHistory();
  //data
  const dispatch = useDispatch();
  const {game, screen, isLoading} = useSelector((state) => state.detail);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  //get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //GET platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return game;
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              {/* <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => {
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />;
                  })}
                </Platforms>
              </Info> */}
            </Stats>
            <Download>
              <button
                onClick={() => {
                  const gameName = game.name;
                  const newName = gameName.replaceAll(' ', '-');
                  console.log(gameName, newName);
                  window.open(
                    `https://fitgirl-repacks.site/${newName}`,
                    '_blank'
                  );
                }}>
                download
              </button>
            </Download>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={game.background_image}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 8rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 80%;
    padding: 1rem 2rem;
    img {
      width: 100%;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }
  @media (max-width: 360px) {
    img {
      width: 20%;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 360px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

const Download = styled(motion.div)`
  button {
    font-size: 1.5rem;
    border: none;
    border-radius: 7px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    @media (max-width: 360px) {
      width: 100%;
      margin-top:1.3rem;
      font-size: 1rem;
    }
  }
`;

export default GameDetail;
