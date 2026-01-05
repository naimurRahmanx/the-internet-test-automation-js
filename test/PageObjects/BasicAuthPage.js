import BasePage from '../../framework/page/BasePage.js'
import { Label } from '../../framework/elements/index.js'

class BasicAuthPage extends BasePage{
    constructor(){
        const uniqueElement = new Label("//div/p[contains(normalize-space(),'Congratulations! You must have the proper credentials.')]");

        super(uniqueElement,'Unique element for Basic Auth Page'),'Basic Auth page';

        this.congratLabel = new Label("//div/p[contains(normalize-space(),'Congratulations! You must have the proper credentials.')]");
    }

    async doLabelMatch(){
        return await this.congratLabel.getText();
    }
}
export default new BasicAuthPage();