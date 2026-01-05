import Browser from "../../framework/browser/Browser.js";
import AddRemoveElementPage from '../PageObjects/AddRemoveElementPage.js';
import { assert } from "chai";

describe('Add / Remove Element Test',()=>{
    it('check behaviour of delete button', async()=>{
        await Browser.openUrl('https://the-internet.herokuapp.com/add_remove_elements/');

        await AddRemoveElementPage.clickAddElementButton();
        assert.isTrue(await AddRemoveElementPage.isDeleteButtonDisplayed(),'Delete button not displayed');

        await AddRemoveElementPage.clickDeleteElementButton();
        assert.isTrue(await AddRemoveElementPage.isDeleteButtonVanished(),'Delete button still stays');
    });
});