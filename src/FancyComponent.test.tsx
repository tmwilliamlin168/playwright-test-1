import { test, expect } from '@playwright/experimental-ct-react';
import FancyComponent from './FancyComponent';

test('should work', async ({ mount }) => {
  const component = await mount(<FancyComponent />);
  await expect(component).toContainText('Fancy!');
});
