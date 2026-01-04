import BasePage from '../../framework/page/BasePage.js'
import { Label } from '../../framework/elements/index.js'

class AB_TestingPage extends BasePage{
    constructor(){
        super(new Label('//div/h3[contains(text(),"A/B Test Variation 1")]','Unique element for AB testing page'),'AB testing elemen page');
        this.abTestingLabel = new Label('//div/h3[contains(text(),"A/B Test Variation 1")]','A/B testing label');
        
    }

    async checkHeadingText(){
        headerText = await this.abTestingLabel.getText();
        if(expect(headerText).to.include('A/B Test')){
            return true;
        }
        return false;
    }
}