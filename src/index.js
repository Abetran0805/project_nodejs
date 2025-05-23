const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const sass = require('sass');
const app = express();
const port = 5500;


app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));  // Đúng cấu trúc thư mục

app.get('/', (req, res) => {
  res.render('home'); // phải có file home.handlebars
});

app.get('/news', (req, res) => {
  res.render('news'); // phải có file home.handlebars
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
