import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";


function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault(); // prevent refresh
        console.log('you hit search', input)

    dispatch({
        type: actionTypes.SET_SEARH_TERM,
        term: input
    })

    history.push('/search')
    };


    return (
        <form className='search'>
             <div className='search_input'>
             <SearchIcon className="search_inputIcon"/>

             <input value={input} onChange={e => setInput(e.target.value)} />
             <MicIcon />
            </div>

            {!hideButtons ? (
            <div className="search__buttons">
                {/* Material UI props */}
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>

            </div>
            ) : (
                <div className="search__buttons">
                {/* Material UI props */}
            <Button className="search__buttonshidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button className="search__buttonshidden" variant="outlined">I'm Feeling Lucky</Button>

            </div>
            )}
           
        </form>
    )
}

export default Search;
