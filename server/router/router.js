import {Router} from "express";
const router = Router();


router.route('/register').post((req,res) =>{
    res.json('register route')
});

router.route('/registerMail').post();
router.route('/authenaticate').post();
router.route('/login').post();

router.route('/user/:username').get();
router.route('/generateOTP').get();
router.route('/verifyOTP').get();
router.route('/createResetSession').get();

router.route('/updateUser').put();
router.route('/resetPassword').put();

export default router