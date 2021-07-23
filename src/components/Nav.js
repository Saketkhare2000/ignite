import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
//redux and routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
import {fadeIn} from '../animations';
function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearch = () => {
    dispatch({type: 'CLEAR_SEARCHED'});
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: bold;
    border-radius: 7px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 360px) {
      width: 100%;
      margin: 1rem 0rem;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    @media (max-width: 360px) {
      width: 80%;
      font-size: 1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  align-items: center;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
