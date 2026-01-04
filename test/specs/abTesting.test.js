import Browser from '../../framework/browser/Browser.js';
import AB_TestingPage from '../PageObjects/AB_TestingPage.js';
import { expect } from 'chai';

describe('A/B Testing Page', () => {
  it('should show heading containing A/B Test', async () => {
    await Browser.openUrl('https://the-internet.herokuapp.com/abtest');

    const headingText = await AB_TestingPage.getHeadingText();
    assert.include(
            headingText,
            'A/B Test',
            'Page heading does not contain "A/B Test"'
        );
  });
});
