import {request, Router} from "express";
const router = Router();

import * as controller from "../controllers/appController.js"
router.route('/register').post(controller.register);
//router.route('/registerMail').post();
router.route('/authenaticate').post((res,req)=>{
    res.end()
});
router.route('/login').post(controller.login);

router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);
router.route('/verifyOTP').get(controller.VerifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

router.route('/updateUser').put(controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

export default router