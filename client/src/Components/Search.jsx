import React from 'react';
import SearchItems from './searchItems'
import axios from 'axios'

class Search extends React.Component {
    constructor (props) {
        super(props) 
            this.state = {
                searchBar: '',
                outputs:[]

            }
        
    }

    //This is to keep track of what goes in the input box.
    handleSearchBar = (e) => {
        this.setState({
            searchBar: e.target.value
        })
        console.log(e.target.value)
    }

    //This is function is for the form. 
    handleSubmit = async(e) => {
        e.preventDefault()

        console.log('submit', e)
       


        console.log('submit', e)
       

\
        const { search, userChecked, circleChecked } = this.state
        let URL;
        if (circleChecked === true) {
            URL = `http://localhost:3030/circles/getCircleByName/${search}`
        } else if (userChecked === true) {
            URL = `http://localhost:3030/users/username/${search}`
        }
        try {
            const response = await axios.get(URL)
            console.log(response)
        } catch (err) {
            console.log(err)
            console.log('not found')
        }

    }

    render() {
        
        return (
            <div className='search'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search

                        <input type='text' onChange={this.handleSearchBar} value={this.state.searchBar}></input>

                        <input type='text' onChange={this.handleSearchChange} value={search}></input>


                    </label>

                        <input type='submit' value='submit'></input>

                </form>
            </div>
        )
    }

} 

export default Search;
    