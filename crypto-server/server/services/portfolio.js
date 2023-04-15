const { v1: uuidv1 } = require('uuid');
const {
  portfolio: PortfolioModel,
} = require('../database');
const Helper = require('../utils/helper');

const save = async (payload) => {
  const { userId, ...newData } = payload;

  const data = {
    public_id: uuidv1(),
    created_by: uuidv1(),
    updated_by: uuidv1(),
    user_id: userId,
    ...newData,
  };

  const response = await PortfolioModel.create(data);

  if (response) {
    return { doc: { message: 'saved successfully' } };
  }

  return { doc: { message: 'details not saved' } };
};

const deletePortfolioUserEntry = async (payload) => {
  const { userId } = payload;

  const response = await PortfolioModel.destroy(
    { where: { user_id: userId } },
  );

  if (response) {
    return { doc: { message: 'delete successfully' } };
  }

  return { doc: { message: 'product not deleted' } };
};

const getUserAllPortfolio = async (payload) => {
  try {
    const { userId } = payload;

    const response = await PortfolioModel.findAll({
      attributes: [ 'public_id', 'name', 'coin_name', 'symbol', 'email', 'price_purchased', 'quantity' ],
      where: { user_id: userId },
    });

    if (response) {
      const data = response.map((i) => {
        const { dataValues } = i;
        const doc = Helper.convertSnakeToCamel(dataValues);

        return doc;
      });

      return { doc: data };
    }

    return { doc: {} };
  } catch (err) {
    return { doc: { message: 'not get data' } };
  }
};
const deletePortfolioParticularEntry = async (payload) => {
  const { userId } = payload;

  const response = await PortfolioModel.destroy(
    { where: { user_id: userId } },
  );

  if (response) {
    return { doc: { message: 'delete successfully' } };
  }

  return { doc: { message: 'product not deleted' } };
};

const updatePortfolioDetails = async (payload) => {
  const { email, publicId, ...data } = payload;

  const response = await PortfolioModel.update(
    data,
    { where: { public_id: publicId } },
  );

  if (response) {
    return { doc: { message: 'updated successfully' } };
  }

  return { doc: { message: "product didn't updated" } };
};

module.exports = {
  save, deletePortfolioUserEntry, getUserAllPortfolio, updatePortfolioDetails, deletePortfolioParticularEntry,

};
