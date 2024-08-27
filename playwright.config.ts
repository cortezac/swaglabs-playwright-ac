import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: `./env/.env.${process.env.ENV}`});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],['list'],['blob']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on',
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'test',
      use: { ...devices['Desktop Chrome'],
        // storageState: './utils/auth.json',
        launchOptions: {
        args: ['--enable-automation', '--no-sandbox', '--disable-dev-shm-usage',
                        '--whitelisted-ips', '--allow-insecure-localhost', '--allowed-ips',
                        '--disable-site-isolation-trials, --ignore-certificate-errors, --disable-web-security'],
        slowMo: 100,
        headless: true,
        },
        viewport: {width: 1920, height: 1080},

       },
    },

  ],

});
