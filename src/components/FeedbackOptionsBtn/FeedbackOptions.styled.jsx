import styled from 'styled-components';

export const Button = styled.button`
transition: all 200ms linear 0s;
border: 1px solid grey;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-size: 20px;
width: 100px;
height: 40px;
:not(:last-child) {
    margin-right: 10px;
}

:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(131,58,180);
background: linear-gradient(90deg, #5470cb 0%, rgb(22, 122, 215) 100%);
}
`