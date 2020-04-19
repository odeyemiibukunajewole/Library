const express = require('express');

const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookroutes');


function router(nav) {
  bookRouter.route('/').get((req, res) => {
    (async function query() {
      const request = new sql.Request();
      const { recordset } = await request.query('select * from books');
      // debug(result);
      res.render('booksListView',
        {
          title: 'Library',
          nav,
          books: recordset
        });
    }());
  });

  bookRouter.route('/:id').all((req, res, next) => {
    (async function query() {
      const { id } = req.params;
      const request = new sql.Request();
      const { recordset } = await request.input('id', sql.Int, id).query('select * from books where id = @id');
      [req.book] = recordset;
      next();
      debug(recordset);
    }());
  })
    .get((req, res) => {
      res.render('bookView',
        {
          title: 'Library',
          nav,
          books: req.book
        });
    });

  return bookRouter;
}
module.exports = router;
