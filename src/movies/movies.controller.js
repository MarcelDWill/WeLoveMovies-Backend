const movieService = require("./movie.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const knex = require("../db/connection");

const movieExists = async (req, res, next) =>{
    const movie = await movieService.read(req.params.moviesId);
    if (movie){
        res.locals.movie = movie;
        return next();
    }
    next({status: 404, message: "Movie not found."});
}

const read = async (req, res, next)=>{
    const movie = res.locals.movie.movie_id;
    res.json({data: await movieService.read(movie) });
};

const readTheaterByMovie = async (req, res, next)=> {
    const movie = res.locals.movie.movie_id;
    res.json({ data: await movieService.readTheaterByMovie(movie) });
}

const readReviewsByMovie = async (req, res, next)=> {
    const movie = res.locals.movie.movie_id;
    res.json({data: await movieService.readReviewsByMovie(movie) });
}

const list = async (req, res, next)=>{
    const isShowing =req.query.is_showing === "true";
    const movie = isShowing
    ? await movieService.listMoviesCurrunetlyShowing()
    : await movieService.list();
    res.json({data: movies});
}

module.exports= {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
    readTheaterByMovie: [ asyncErrorBoundary(movieExists), 
        asyncErrorBoundary(readTheaterByMovie), ],
    readReviewsByMovie: [
        asyncErrorBoundary(movieExists),
        asyncErrorBoundary(readReviewsByMovie),
    ],
};