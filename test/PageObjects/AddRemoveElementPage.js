import BasePage from "../../framework/page/BasePage.js";
import { Button, Label } from '../../framework/elements/index.js';

class AddRemoveElementPage extends BasePage{
    constructor(){
        const uniqueElement = new Label("//h3[contains(normalize-space(),'Add/Remove Elements')]");
        super(uniqueElement,'Unique element for Add Remove Page'),'Add Remove Element Page';

        this.addElementButton = new Button('button[onclick="addElement()"]','Add Element Button');
        this.deleteButton = new Button('button[onclick="deleteElement()"]','Delete Button');
    }

    async clickAddElementButton(){
        await this.addElementButton.click();
    }

    async isDeleteButtonDisplayed(){
        return this.deleteButton.state().isDisplayed();
    }

    async clickDeleteElementButton(){
        await this.deleteButton.click();
    }

    async isDeleteButtonVanished(){
        return this.deleteButton.state().waitForDisplayed({reverse:true});
    }
}
export default new AddRemoveElementPage();