const { Portfolio: PortfolioService } = require('../services');

const save = async (req, res) => {
  try {
    const data = { userId: req.user.userId, ...req.body };
    const { doc } = await PortfolioService.save(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

const deletePortfolioUserEntry = async (req, res) => {
  try {
    const data = { userId: req.user.userId };
    const { doc } = await PortfolioService.deletePortfolioUserEntry(data);

    if (doc) {
      return res.deleted();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

const getUserAllPortfolio = async (req, res) => {
  try {
    const data = { publicId: req.user.publicId };
    const { doc } = await PortfolioService.getUserAllPortfolio(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};
const deletePortfolioParticularEntry = async (req, res) => {
  try {
    const data = { userId: req.user.userId };
    const { doc } = await PortfolioService.deletePortfolioParticularEntry(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

const updatePortfolioDetails = async (req, res) => {
  try {
    const data = { publicId: req.user.publicId };
    const { doc } = await PortfolioService.updatePortfolioDetails(data);

    if (doc) {
      return res.postRequest();
    }

    return res.postRequest();
  } catch (err) {
    return res.serverError();
  }
};

module.exports = {
  save, deletePortfolioUserEntry, getUserAllPortfolio, updatePortfolioDetails, deletePortfolioParticularEntry,
};
