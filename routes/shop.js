var products = [
	{title: 'Title0', category: 0, body: 'Intro 0', img: 'https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?h=350&auto=compress&cs=tinysrgb' },
	{title: 'Title1', category: 1, body: 'Intro 1', img: 'https://images.pexels.com/photos/204611/pexels-photo-204611.jpeg?h=350&auto=compress&cs=tinysrgb' },
	{title: 'Title2', category: 2, body: 'Intro 2', img: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?h=350&auto=compress&cs=tinysrgb' }
]
var category = ['Phone', 'PC', 'Food']

exports.index = (req, res) => {
	res.render('shop/index', {
		sidebar: res.locals.sidebar,
		products: products,
		category: category,
		csrfToken: req.csrfToken()
	})
}
exports.show = (req, res) => {
	res.render('shop/show', {product: products[req.params.id]})
}
exports.new = (req, res) => {
	res.render('shop/new', {
		csrfToken: req.csrfToken(),
		category: category
	})
}
exports.create = (req, res) => {
	var product = {
		title: req.body.title,
		category: req.body.category,
		img: req.body.img,
		body: req.body.body
	}
	products.push(product)
	res.redirect('/shop')
}
exports.edit = (req, res) => {
	res.render('shop/edit', {
		product: products[req.params.id],
		id: req.params.id,
		category: category,
		csrfToken: req.csrfToken()
	})
}
exports.update = (req, res) => {
	products[req.body.id] = {
		title: req.body.title,
		category: req.body.category,
		img: req.body.img,
		body: req.body.body
	}
	res.redirect('/shop')
}
exports.delete = (req, res) => {
	products.splice(req.body.id, 1)
	res.redirect('/shop')
}

// Category
exports.category = (req, res) => {
	res.render('shop/category', {
		sidebar: res.locals.sidebar,
		category: category,
		csrfToken: req.csrfToken()
	})
}
exports.updateCategory = (req, res) => {
	category[req.body.id] = req.body.category
	res.redirect('/shop/category')
}