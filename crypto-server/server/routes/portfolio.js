const {
  deletePortfolioUserEntry, save, getUserAllPortfolio, updatePortfolioDetails, deletePortfolioParticularEntry,
} = require('../controllers/portfolio');
const { verifyJWT } = require('../controllers/auth');

module.exports = (router) => {
  router.get('/get', verifyJWT, getUserAllPortfolio);
  router.get('/get', verifyJWT, deletePortfolioParticularEntry);
  router.delete('/delete', verifyJWT, deletePortfolioUserEntry);
  router.post('/save', verifyJWT, save);
  router.patch('/update', verifyJWT, updatePortfolioDetails);
};
