var post = {title: 'About this site', body: 'content' }


exports.toIndex = (req, res) => {
	res.redirect('/about')
}
exports.index = (req, res) => {
	res.render('about/index', {post: post, csrfToken: req.csrfToken()})
}
exports.edit = (req, res) => {
	res.render('about/edit', {post: post, csrfToken: req.csrfToken()})
}
exports.update = (req, res) => {
	post = {
		title: req.body.title,
		body: req.body.body
	}
	res.redirect('/about')
}