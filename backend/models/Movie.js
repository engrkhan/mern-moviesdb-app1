const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    mov_name: String,
    mov_year: Number,
    mov_time: Number,
    mov_lang: String,
    mov_dt_rel: Date,
    mov_rel_country: String,
    rev_name: String,
    rev_id: Number,
    rev_stars: Number,
    num_o_ratings: Number
});

module.exports = mongoose.model('Movie', movieSchema);
