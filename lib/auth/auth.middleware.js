const UsersModel = require('../user/users.model');
const { commonErrors } = require('../error');

module.exports.userAuth = function (req, res, next) {
  const authToken = req.header('X-Auth-Token');
  if (!authToken) throw new commonErrors.UnauthorizedError('Auth Token not found!');

  try {
    req.user = UsersModel.verifyAuthTokenAndGetUser(authToken);
    console.log('from auth middleware', req.user);
    next();
  } catch (ex) {
    throw new commonErrors.UnauthorizedError('Auth Token is not correct!');
  }
};

module.exports.adminAuth = function (req, res, next) {
  if (!req.user.isAdmin) throw new commonErrors.ForbiddenError('Only for admins!');
  next();
};
