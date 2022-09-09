import styled from "styled-components"

const Container = styled.div`
`

export function SearchForm(props: any) {


    return(
        <Container>
            <form>
            <label htmlFor="location-search">
                <span>Enter location</span>
            </label>
            <input 
                type='text'
                id='location-search'
                placeholder='Search for locations'
                name='search'
                onChange={() => props.onSearchInput}
            />
            <button type='submit'>Search</button>
            </form>
        </Container>        
    )
}