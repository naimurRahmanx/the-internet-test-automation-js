import BasePage from '../../framework/page/BasePage.js';
import { Label } from '../../framework/elements/index.js';

class AB_TestingPage extends BasePage {
  constructor() {
    // Unique/stable element for this page (must work for both variations)
    const uniqueElement = new Label(
      '//h3[contains(normalize-space(), "A/B Test")]',
      'Unique element for A/B Testing page'
    );

    super(uniqueElement, 'A/B Testing Page');

    this.heading = new Label(
      '//h3[contains(normalize-space(), "A/B Test")]',
      'A/B Testing heading'
    );
  }

  async getHeadingText() {
    return await this.heading.getText();
  }
}

export default new AB_TestingPage();
