import React from 'react';

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
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', e)
       
    }

    render() {
        return (
            <div className='search'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search
                        <input type='text' onChange={this.handleSearchBar} value={this.state.searchBar}></input>

                    </label>
                    <input type='submit' value='submit'></input>
                </form>
            </div>
        )
    }

} 

export default Search;
    