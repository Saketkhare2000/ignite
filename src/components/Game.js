import React from 'react';
//styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {loadDetail} from '../actions/detailAction';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {popUp} from '../animations';
// import {smallImage} from '../util';
function Game({name, released, image, id}) {
  const stringPathId = id.toString();
  //load details

  const dispatch = useDispatch();
  const loadDetaildHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetaildHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;

export default Game;
