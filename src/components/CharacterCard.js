import React from "react";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content:center;
background #3a3b3b;
width: 100%;
`;

const Card= styled.div`
 display:flex;
 flex-direction: column;
 width: 300px;
 padding: 20px;
 margin: 20px;
 background: #0fbfff;
 color: #ffffff;
 font-size: 150%;
 font-weight: 700;
 border-radius:5px;
 align-items:center;
`;

const Img = styled.img`
border-radius: 5px;
margin: 5px;
text-size: 25px;
`;

const Div = styled.div`
margin: 5px;
`;
const CharacterCard = props => {
  const {} = props.character;
  return(

    <Container>
      <Card className='character-card'>
      <Div>{props.character.name}</Div>
      <Img src={props.character.image}/>
      <Div>Species: {props.character.species}</Div>
      <Div>Status: {props.character.status}</Div>
      </Card>
    </Container>
  )
}
export default CharacterCard;