import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const SearchStyle = styled.div`
display: flex;
flex-direction: column;
width: 80%;
background-color: darkslategrey;
margin-left: 10%;
justify-content: center;
text-align: center;

input {
  border-radius: 10px;
  font-size: 150%;
  color: #0ac733;
  background: black;

}
`;
export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=> {
    const results = props.characters.filter(character =>{
      // console.log(character)
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results);
    }
  ,[searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault()
  }

    return(
    <SearchStyle className="SearchStyle">
     <form  onSubmit={handleSubmit}>
       <label htmlFor='name'>Search:</label>
       <input id='name'
       type='text'
       placeholder='find a character'
       onChange={handleChange}
       value={searchTerm}/>
       <button>Submit</button>
     </form>

      {searchResults.map(character => <CharacterCard key={character.id} character={character}/>)}
      <hr></hr>
    </SearchStyle>

    );

}