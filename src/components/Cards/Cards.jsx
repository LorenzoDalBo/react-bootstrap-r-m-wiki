import { Card, CardGroup } from "react-bootstrap";


function Cards({results}) {

    let display;
    if(results?.length > 0){
        display = results.map((character) =>
        <Card>
            <Card.Img src={character?.image} />
            <Card.Title></Card.Title>
        </Card>)
    } else {
        display = <p>"No characters found"</p>
    }

    return(
            <div className="w-10/12 grid p-2 gap-4 grid-cols-5 grid-rows-4 rounded-xl bg-slate-800 mt-2">
                {display}
            </div>
    )
}

export default Cards;