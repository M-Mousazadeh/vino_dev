const path = require('path');

const express = require('express');

const {rootDir} = require('./root');

module.exports = (app)=>{
    app.use(express.static(path.join(rootDir,'public')))
}