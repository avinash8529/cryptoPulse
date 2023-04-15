
const { Auth: AuthService } = require('../services');

// eslint-disable-next-line consistent-return
const registration = async (req, res) => {
  try {
    const { doc } = await AuthService.registration(req.body);

    if (doc) {
      return res.send({
        message: 'registration successfull',
      });
    }
  } catch (err) {
    return res.unAuthorized();
  }
};

const login = async (req, res) => {
  try {
    const { doc } = await AuthService.login(req.body);

    if (doc) {
      return res.send({
        ...doc,
        message: 'login succesfull',
      });
    }

    return res.unAuthorized();
  } catch (err) {
    return res.unAuthorized();
  }
};
// we are using this to verifies bearer token coming from service
const verifyJWT = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const response = await AuthService.verifyJWT(authorization);

    if (response) {
      req.user = response;

      return next();
    }

    return res.unAuthorized();
  } catch (err) {
    return res.unAuthorized();
  }
};

const me = async (req, res) => {
  try {
    const data = { email: req.user.email };
    const { doc } = await AuthService.me(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

module.exports = {
  registration, login, me, verifyJWT,
};
