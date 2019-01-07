describe('Test Secret Button', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        await device.disableSynchronization();
    });

    async function tapButton() {
        await waitFor(element(by.id('secretButton'))).toBeVisible().withTimeout(5000);
        return element(by.id('secretButton')).tap()
    }

    it('should have welcome screen', async () => {
        await expect(element(by.id('mainScreen'))).toBeVisible();
    });

    it('should reveal secret after tap', async () => {
        await tapButton();
        await waitFor(element(by.id('secretImage'))).toBeVisible().withTimeout(5000);
        return expect(element(by.id('secretImage'))).toBeVisible();
    });

    it('should hide secret after two taps', async () => {
        await tapButton();
        await tapButton();
        await waitFor(element(by.id('secretImage'))).toBeVisible().withTimeout(5000);
        return expect(element(by.id('secretImage'))).toBeNotVisible();
    });
});
