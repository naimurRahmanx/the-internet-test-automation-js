//https://the-internet.herokuapp.com/abtest
import Browser from "../../framework/browser/Browser.js";
import AB_TestingPage from '../PageObjects/AB_TestingPage.js';
import { assert } from "chai";

describe('A/B Testing Page test',()=>{
    it('check heading of page', async()=>{
        await Browser.openUrl('https://the-internet.herokuapp.com/abtest');

        
        assert.isTrue(AB_TestingPage.checkHeadingText(),'Page heading does not contain desired text.');
    });
});