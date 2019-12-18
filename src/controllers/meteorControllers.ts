import express from 'express';
import meteorites from '../data/meteorites';

/*
    Generic error responder for sending back error response
*/
const respondWithError = (res:express.Response, msg:string, status:number) => {

    res.status(status);
    res.send({
        error: true,
        message: {
            "status": msg
        }
    });

}

/*
    Filter the meteorites data for meteorite that matches the year provided

    Returns:
        array: array of filtered meteorites
*/
const getMeteoritesByYear = (year:number) => {

    return meteorites.filter((meteorite:any) => {
        return meteorite.yearOnly === year;
    });

}

/*
    Filter the meteorites data for meteorite that matches the recclass provided

    Returns:
        array: array of filtered meteorites
*/
const getMeteoritesByRecclass = (recclass:string) => {

    return meteorites.filter((meteorite:any) => {
        return meteorite.recclass === recclass;
    });

}

/*
    Controller for GET /meteorites

    Accepts query parameters year and recclass

    Responds with meteorites that matches either year or recclass
*/
export const GET_meteorites = (req:express.Request, res:express.Response, next:express.NextFunction) => {

    const year = parseInt(req.query.year);
    const recclass = req.query.recclass;

    if (year && recclass) {
        respondWithError(res, 'The use of both year and recclass filter is not implemented', 400);
        return;
    }

    if (!year && !recclass) {
        respondWithError(res, 'Please specify either year or recclass', 400);
        return;
    }

    if (typeof year !== 'number') {
        respondWithError(res, 'Year must be a number', 400);
        return;
    }

    if (year) {
        let meteoritesByYear = getMeteoritesByYear(year);
        res.send({
            meteorites: meteoritesByYear
        });
        return;
    }

    if (recclass) {
        let meteoritesByRecclass = getMeteoritesByRecclass(recclass);
        res.send({
            meteorites: meteoritesByRecclass
        });
        return;
    }

}