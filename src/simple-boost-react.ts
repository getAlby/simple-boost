import React from 'react';
import {SimpleBoost} from './simple-boost';
import {createComponent} from '@lit/react';

if (!customElements.get('simple-boost')) {
  customElements.define('simple-boost', SimpleBoost);
}

export const SimpleBoostButton = createComponent({
  tagName: 'simple-boost',
  elementClass: SimpleBoost,
  react: React,
  events: {
    onSuccess: 'success',
  },
});
