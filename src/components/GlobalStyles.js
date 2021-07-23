import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.7rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-thumb{
            background-color: white;
        }
    }
    body{
        font-family:'Montserrat',sans-serif;
        width:100%;
    }
    h1{
        font-size:2rem;
        font-family: 'Dela Gothic One', cursive;
        font-weight:lighter;
        color:#3a3a3a;
    }
    h3{
        font-size:1.3rem;
        color:#333;
        padding:1.5rem 0rem;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display:block;
    }
`;

export default GlobalStyles;
