const { Article } = require("./models");

const isArticleOwner = req => {
  const article = Article.find(Number(req.params.id));
  return article && req.user && req.user.id === article.ownerId;
};

// Policies can be defined on their own directory; each file named after
// its entity. The loadPolicies function can be used to load them. That
// would be something like this:
//  - policies [dir]
//    * user.js
//    * article.js
// The definition of the [ article ] policy would be something like this:
//  module.exports = {
//    view: {},
//    create: {},
//    update: () => {}
//    delete: () => {}
//  }
module.exports = {
  article: {
    view: {
      any: [
        "article.view",
        "article.create",
        "article.update",
        "article.delete"
      ]
    },
    create: "article.create",
    update: isArticleOwner,
    delete: isArticleOwner
  }
};