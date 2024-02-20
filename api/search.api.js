const {getData} = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');
const getAll = async(req) => {
    const { query } = req.params;
    // console.log(query);
    const { data: searchAll } = await getData(`/search?q=${query}&type=track,album,artist,playlist&limit=12`, req.cookies.access_token);
    return searchAll;
}
module.exports = {getAll}