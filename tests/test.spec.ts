import { test } from "../pages/BasePage";

test('Login', async ({ loginPage }) => {
  await loginPage.login();
});
