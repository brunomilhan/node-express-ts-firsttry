/**
 * Created by Bruno on 12/10/2016.
 */
import express = require('express');

class CtrlUser {

    public index(req: express.Request, res: express.Response) {
        res.render('index', {title: 'test'});
    }
}
export = CtrlUser;