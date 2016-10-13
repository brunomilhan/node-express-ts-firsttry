/**
 * Created by Bruno on 12/10/2016.
 */
/// <reference path="typings/index.d.ts" />
import express = require('express');
import User = require('./routes/User');

class Express{
    private app: express.Application;

    //Routes
    private user: User = new User();


    constructor(){
        this.app = express();
        this.setMiddlewares();
        this.setEnvVars();
        this.setViewEngine();
        this.user.setApp(this.app);
        this.setRoutes();
    }

    getApp(): express.Application {
        return this.app;
    }

    private setEnvVars(){
        this.app.set('port', 3000);
    }

    private setViewEngine(){
        // view engine setup
        this.app.set('views', './views');
        this.app.set('view engine', 'jade');
    }

    private setMiddlewares(){
        //this.app.use(express.static('./public'));

    }

    private setRoutes(){

        this.app.use(this.user.createRoute);
    }

}

export = Express;