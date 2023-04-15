const { Coin: CoinService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await CoinService.getList();

  return res.send(doc);
};
const coinList = async (req, res) => {
  const { doc } = await CoinService.coinList();

  return res.send(doc);
};

const coinSuggestionsList = async (req, res) => {
  try {
    const { coinSymbol, name } = req.query;
    const data = { coinSymbol, name };
    const { doc } = await CoinService.coinSuggestionsList(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

module.exports = { getList, coinList, coinSuggestionsList };
