const express = require('express');
const bookRouter = express.Router();
function router(nav) {
  const books = [{
    author: 'Chinua Achebe',
    title: 'Things Fall Apart',
    read: false
  },
  {
    author: 'Hans Christian Andersen',
    title: 'Fairy tales',
    read: false
  },
  {
    author: 'Dante Alighieri',
    title: 'The Divine Comedy',
    read: false,
  },
  {
    author: 'Jane Austen',
    title: 'Pride and Prejudice',
    read: false,
  },
  {
    author: 'Samuel Beckett',
    title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
    read: false
  },
  {
    author: 'Ralph Ellison',
    title: 'Invisible Man',
    read: false
  },
  {
    author: 'Euripides',
    title: 'Medea',
    read: false
  },
  {
    author: 'William Faulkner',
    title: 'The Sound and the Fury',
    read: false
  },
  {
    author: 'Gustave Flaubert',
    title: 'Madame Bovary',
    read: false
  }
  ];

  bookRouter.route('/').get((req, res) => {
<<<<<<< HEAD
    res.render('booksListView',
      {
        title: 'Library',
        nav,
        books
      });
=======
    const request = new sql.Request();
    request.query('select * from books').then((result) => {
      debug(result);
      res.render('booksListView',
        {
          title: 'Library',
          nav,
          books
        });
    });
>>>>>>> 44bfd7d... add database to my library app
  });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView',
        {
          title: 'Library',
          nav,
          books: books[id]
        });
    });
  return bookRouter;
}


module.exports = router;
