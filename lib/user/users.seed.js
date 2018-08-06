const mongoose = require('mongoose');
// const UsersModel = require('./users.model');

module.exports.getUsersSeed = async function () {
  const UsersModel = mongoose.model('User');

  const usersSeed = [{
      _id: mongoose.Types.ObjectId(),
      firstName: 'Ravi',
      lastName: 'Jagga',
      email: 'contact@ravijagga.com',
      emailToken: null,
      hash: await UsersModel.getPasswordHash('ravijagga'),
      gender: 'male',
      profileImg: null,
      verified: true,
      isAdmin: true
    },
    {
      _id: mongoose.Types.ObjectId(),
      firstName: 'Gaurav',
      lastName: 'Kumar',
      email: 'gaurav@kumar.com',
      emailToken: null,
      hash: await UsersModel.getPasswordHash('gauravkumar'),
      gender: 'male',
      profileImg: null,
      verified: true,
      isAdmin: false
    },
    {
      _id: mongoose.Types.ObjectId(),
      firstName: 'Mukesh',
      lastName: 'Chauhan',
      email: 'mukesh@chauhan.com',
      emailToken: null,
      hash: await UsersModel.getPasswordHash('mukeshchauhan'),
      gender: 'male',
      profileImg: null,
      verified: true,
      isAdmin: false
    }
  ];

  return usersSeed;
};
