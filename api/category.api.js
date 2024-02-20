const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');

const getSeveralBrowseCategories = async (req, artistIds) => {
    const {data: severalBrowseCategories } = await getData('/browse/categories', req.cookies.access_token);
    return severalBrowseCategories;
}
module.exports = {getSeveralBrowseCategories};