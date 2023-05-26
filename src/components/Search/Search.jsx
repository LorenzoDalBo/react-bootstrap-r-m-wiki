import { FormControl, InputGroup, Button } from "react-bootstrap";


function Search() {
    return(
        <InputGroup size="lg">
            <InputGroup className="mb-3">
        
        <FormControl placeholder="Search for characters..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2">
        </FormControl>

        <Button variant="outline-secondary">
          Search
        </Button>
      </InputGroup>
        </InputGroup>
    )
}

export default Search;