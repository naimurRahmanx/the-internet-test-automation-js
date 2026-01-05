import Browser from "../../framework/browser/Browser.js";
import BasicAuthPage from "../PageObjects/BasicAuthPage.js";
import { assert } from "chai";

describe('Basic Auth Page', ()=>{
    it('Basic auth should match', async()=>{
        await Browser.openUrl('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        assert.include(await BasicAuthPage.doLabelMatch(),'Congratulations! You must have the proper credentials.','Page heading did not match.');
    });
});