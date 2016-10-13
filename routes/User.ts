/**
 * Created by Bruno on 12/10/2016.
 */
import express = require('express');
import CtrlUser = require('../controller/CtrlUser');

class User {
    private app: express.Application;
    private ctrlUser: CtrlUser;

    constructor(app: express.Application) {
        this.app = app;
        this.ctrlUser = new CtrlUser();
    }

    public createRoute() {
        this.app.get('/', this.ctrlUser.index);
    }
}
export = User;