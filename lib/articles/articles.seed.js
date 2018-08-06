const CategoriesModel = require('../categories/categories.model');
const UsersModel = require('../user/users.model');

module.exports.getArticlesSeed = async function () {
  const categories = await CategoriesModel.find({}).select('_id').exec();
  const users = await UsersModel.find({}).select('_id').exec();

  const articlesSeed = [{
      title: 'Title 1',
      body: 'Article Body 1',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 2',
      body: 'Article Body 2',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 3',
      body: 'Article Body 3',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 4',
      body: 'Article Body 4',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 5',
      body: 'Article Body 5',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 6',
      body: 'Article Body 6',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    },
    {
      title: 'Title 7',
      body: 'Article Body 7',
      categories: categories[Math.floor((Math.random() * categories.length))]._id,
      user: users[Math.floor((Math.random() * users.length))]._id,
    }
  ];

  return articlesSeed;
};
