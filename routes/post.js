var posts = [
	{title: 'Title0', body: 'News0' },
	{title: 'Title1', body: 'News1' },
	{title: 'Title2', body: 'News2' }
]

exports.index = (req, res) => {
	res.render('news/index', {
		sidebar: res.locals.sidebar,
		posts: posts,
		csrfToken: req.csrfToken()
	})
}
exports.show = (req, res) => {
	res.render('news/show', {post: posts[req.params.id]})
}
exports.new = (req, res) => {
	res.render('news/new', { csrfToken: req.csrfToken() })
}
exports.create = (req, res) => {
	var post = {
		title: req.body.title,
		body: req.body.body
	}
	posts.push(post)
	res.redirect('/news')
}
exports.edit = (req, res) => {
	res.render('news/edit', {post: posts[req.params.id], id: req.params.id, csrfToken: req.csrfToken()})
}
exports.update = (req, res) => {
	posts[req.body.id] = {
		title: req.body.title,
		body: req.body.body
	}
	res.redirect('/news')
}
exports.delete = (req, res) => {
	posts.splice(req.body.id, 1)
	res.redirect('/news')
}