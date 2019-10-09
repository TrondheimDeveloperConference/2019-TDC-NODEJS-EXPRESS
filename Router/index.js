"use strict";

// Modules
let express = require('express'); // Express Server
let aa = require("aa"); // Async-Away

// Utils
let CFG = require(__dirname + '/../config'); // Config file

//Router() object
let Index = express.Router();

Index.route('/').get(function(req,res){
	aa(function*(){
		res.render('index');
	});
});

Index.route('/info').get(function(req,res){
	aa(function*(){
		res.render('info');
	});
});

Index.route('/tickets').get(function(req,res){
	aa(function*(){
		res.render('tickets');
	});
});

Index.route('/programme').get(function(req,res){
	aa(function*(){
		res.render('programme');
	});
});

Index.route('/speakers').get(function(req,res){
	aa(function*(){
		res.render('speakers');
	});
});

Index.route('/partners').get(function(req,res){
	aa(function*(){
		res.render('partners');
	});
});

Index.route('/startups').get(function(req,res){
	aa(function*(){
		res.render('startups');
	});
});

Index.route('/code').get(function(req,res){
	aa(function*(){
		res.render('code_of_conduct');
	});
});

module.exports = Index;
