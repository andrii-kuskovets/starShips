import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {IShips} from "../../interfaces";

type BoardShipProps = {
    ship: IShips
}

export const Ship: React.FC<BoardShipProps> = ({ship}) =>{
    return(
        <CardSubtitle className="card col-xl-3 mr-3 border-2 border-danger">
            <CardBody>
                <CardTitle className='card__item' tag="h5">{ship.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted card__item">{ship.model}</CardSubtitle>
                <CardText className='card__item'>{ship.starship_class}</CardText>
                <CardText className='card__item'>{ship.hyperdrive_rating}</CardText>
                <CardText className='card__item'>{ship.passengers}</CardText>
                <CardText className='card__item'>{ship.manufacturer}</CardText>
            </CardBody>
        </CardSubtitle>
    )
}