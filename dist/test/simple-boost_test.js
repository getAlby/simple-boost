/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { SimpleBoost } from '../simple-boost.js';
import { fixture, assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
suite('simple-boost', () => {
    test('is defined', () => {
        const el = document.createElement('simple-boost');
        assert.instanceOf(el, SimpleBoost);
    });
    test('renders with default values', async () => {
        const el = await fixture(html `<simple-boost></simple-boost>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('renders with a set name', async () => {
        const el = await fixture(html `<simple-boost name="Test"></simple-boost>`);
        assert.shadowDom.equal(el, `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
    });
    test('handles a click', async () => {
        const el = (await fixture(html `<simple-boost></simple-boost>`));
        const button = el.shadowRoot.querySelector('button');
        button.click();
        await el.updateComplete;
        assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `);
    });
    test('styling applied', async () => {
        const el = (await fixture(html `<simple-boost></simple-boost>`));
        await el.updateComplete;
        assert.equal(getComputedStyle(el).paddingTop, '16px');
    });
});
//# sourceMappingURL=simple-boost_test.js.map