const express = require('express')
const router = express.Router()

const Airtable = require('airtable')

// Add your routes here - above the module.exports line

router.post('/surveys/usability/submit', (req, res) => {
	var base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
		'appJt9mIgLJh3VCQM'
	)

	base('Prototype feedback responses').create(
		{
			Date: new Date(),
			'Participant ID': req.session.data['participant-id'],
			Frequency: parseInt(req.session.data['frequency']),
			Complexity: parseInt(req.session.data['complexity']),
			'Ease of use': parseInt(req.session.data['ease-of-use']),
			Assistance: parseInt(req.session.data['assistance']),
			Integration: parseInt(req.session.data['integration']),
			Inconsistency: parseInt(req.session.data['inconsistency']),
			Learn: parseInt(req.session.data['learn']),
			Cumbersome: parseInt(req.session.data['cumbersome']),
			Confident: parseInt(req.session.data['confident']),
			'Get going': parseInt(req.session.data['get-going']),
			Comments: req.session.data['comments']
		},
		function(err, record) {
			if (err) {
				console.error(err)
				res.redirect('/error')
			}
			console.log(record.getId())
			res.redirect('/complete')
		}
	)
})

module.exports = router
