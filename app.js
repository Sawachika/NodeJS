const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	csrf = require('csurf'),
	cookieParser = require('cookie-parser'),
	about = require('./routes/about'),
	post = require('./routes/post'),
	shop = require('./routes/shop')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// public
app.use(express.static(__dirname + '/public'));

// middleware
var csrfProtection = csrf({ cookie: true })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(csrfProtection)

// routing

// about
app.use('/about', (req, res, next) => {
	res.locals.sidebar = 'about'
	next()
})
app.get('/', about.toIndex)
app.get('/about', about.index)
app.get('/about/edit', about.edit)
app.put('/about', about.update)

// news
app.use('/news', (req, res, next) => {
	res.locals.sidebar = 'news'
	next()
})
app.get('/news', post.index)
app.get('/news/:id([0-9]+)', post.show)
app.get('/news/new', post.new)
app.post('/news/create', post.create)
app.get('/news/:id/edit', post.edit)
app.put('/news/:id', post.update)
app.delete('/news/:id', post.delete)

// shop
app.use('/shop', (req, res, next) => {
	res.locals.sidebar = 'shop'
	next()
})
app.get('/shop', shop.index)
app.get('/shop/:id([0-9]+)', shop.show)
app.get('/shop/new', shop.new)
app.post('/shop/create', shop.create)
app.get('/shop/:id/edit', shop.edit)
app.put('/shop/:id([0-9]+)', shop.update)
app.delete('/shop/:id', shop.delete)

app.get('/shop/category', shop.category)
app.put('/shop/category', shop.updateCategory)

app.listen(3000)