import { useState } from 'react'
import styles from '../styles/SearchCharacter.module.css'

const SearchCharacter = () => {
    const [search, setSearch] = useState()

    const handleCharacterSearch = (e) => {
        setSearch(e)
    }


  return (
    <input 
    onChange={e => handleCharacterSearch(e.target.value)}
    placeholder='Search for character...'>
    
    </input>
  )
}

export default SearchCharacter