/**
 * Created by Bruno on 12/10/2016.
 */
/// <reference path="typings/index.d.ts" />
import http = require('http');
import express = require('express');
import Express = require('./Express');

class Server {
    express = new Express();
    app: express.Application;

    constructor(){
        this.app = this.express.getApp();
    }

    public createServer(){
        http.createServer(this.app).listen(this.app.get('port'));
    }
}
export = Server;
