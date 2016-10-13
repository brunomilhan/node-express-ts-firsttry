/**
 * Created by Bruno on 12/10/2016.
 */
import express = require('express');
import CtrlUser = require('../controller/CtrlUser');

class User {
    private app: express.Application;

    private ctrlUser: CtrlUser;


    constructor() {
        this.ctrlUser = new CtrlUser();
    }

    public setApp(app: express.Application){
        this.app = app;
    }

    public createRoute() {
        return this.app.get('/', this.ctrlUser.index);
    }

}

export = User;