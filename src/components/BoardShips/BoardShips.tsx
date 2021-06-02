import React from 'react';
import {Ship} from "../Ship/Ship";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {IShips, ISwapi} from "../../interfaces";
type BoardShipsProps = {
    results: IShips[]
}

export const BoardShips: React.FC<BoardShipsProps> = ({results}) =>{
    return(
        <div className="row">
            {results.map(item=> (
                // <div key={item.name}>{item.name}</div>
                <Ship key={item.name} ship={item} />
            ))}

        </div>
    )
}