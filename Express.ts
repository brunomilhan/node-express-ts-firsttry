/**
 * Created by Bruno on 12/10/2016.
 */
/// <reference path="typings/index.d.ts" />
import express = require('express');

class Express{
    public app: express.Application;


    constructor(){
        this.app = express();
        this.setMiddlewares();
        this.setEnvVars();
    }

    getApp(): express.Application {
        return this.app;
    }

    private setEnvVars(){
        this.app.set('port', 3000);
    }

    private setMiddlewares(){
        this.app.use(express.static('./public'));
    }

}

export = Express;