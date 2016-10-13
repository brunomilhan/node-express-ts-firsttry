/**
 * Created by Bruno on 12/10/2016.
 */
/// <reference path="typings/index.d.ts" />
import express = require('express');
import User = require('./routes/User');

class Express{
    private app: express.Application;
    //Routes
    private user: User;

    constructor(){
        this.app = express();
        this.user = new User(this.app);
        this.setEnvVars();
        this.setViewEngine();
        this.setMiddlewares();
    }

    getApp(): express.Application {
        console.log('Express-getApp');
        return this.app;
    }

    private setEnvVars(){
        this.app.set('port', 3000);
    }

    private setViewEngine(){
        this.app.set('views', './views');
        this.app.set('view engine', 'jade');
    }

    private setMiddlewares(){
        //this.app.use(express.static('./public'));
        this.user.createRoute();
    }
}
export = Express;