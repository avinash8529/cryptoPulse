/* eslint-disable array-callback-return */
const { v1: uuidv1 } = require('uuid');
const jwt = require('jsonwebtoken');

const {
  users: UserModel,
} = require('../database');
const Helper = require('../utils/helper');

const createJWT = (data) => {
  const token = jwt.sign(data, 'hfhadljABDNSFJKB');

  return token;
};

const verifyJWT = (bearerToken) => {
  const token = bearerToken.split(' ')[1];
  const decoded = jwt.verify(token, 'hfhadljABDNSFJKB');

  return decoded;
};

const registration = async (payload) => {
  const {
    name, email, userName, password,
  } = payload;

  const data = {
    name, email, user_name: userName, password, public_id: uuidv1(),
  };

  const isUserExist = await UserModel.findOne({
    where: { email },
  });

  if (!isUserExist) {
    const response = await UserModel.create(data);

    if (response) {
      return { doc: { message: 'successfully saved' } };
    }
  }

  return { doc: { message: 'user already exist' } };
};

const login = async (payload) => {
  const { email, password } = payload;

  const isUserExist = await UserModel.findOne({
    where: { email },
  });

  if (isUserExist) {
    const {
      dataValues: {
        password: savedPassword, name, user_name: userName, public_id: userId,
      },
    } = isUserExist;

    if (password === savedPassword) {
      const data = {
        name, userName, userId, email,
      };
      const token = createJWT(data);

      return { doc: { isLoggedIn: true, token, message: 'logged in successfully' } };
    }

    return { doc: { isLoggedIn: false, message: 'incorrect password!!' } };
  }

  return { errors: [ { key: 'username', messages: 'user or password is wrong' } ] };
};

const me = async (payload) => {
  const { email } = payload;

  const response = await UserModel.findOne({
    attributes: [ 'user_name', 'email', 'public_id', 'name' ],
    where: { email },
  });

  if (response) {
    const { dataValues } = response;
    const doc = Helper.convertSnakeToCamel(dataValues);

    return { doc };
  }

  return { doc: {} };
};

module.exports = {
  registration, login, me, verifyJWT,
};
