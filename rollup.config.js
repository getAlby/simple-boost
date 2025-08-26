/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
  commonjs(),
  replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
  resolve(),
  terser({
    ecma: 2017,
    module: true,
    warnings: true,
    mangle: { properties: { regex: /^__/ } },
  }),
  summary()
];

const onwarn = (warning) => {
  if (warning.code !== 'THIS_IS_UNDEFINED') {
    console.error(`(!) ${warning.message}`);
  }
};

export default [
  {
    input: 'dist/simple-boost.js',
    output: {
      file: 'dist/simple-boost.bundled.js',
      format: 'esm',
      inlineDynamicImports: true,
    },
    onwarn,
    plugins,
  },
  {
    input: 'dist/simple-boost-react.js',
    output: [
      {
        file: 'dist/simple-boost-react.bundled.js',
        format: 'esm',
        inlineDynamicImports: true,
      },
      {
        file: 'dist/simple-boost-react.bundled.cjs',
        format: 'cjs',
        inlineDynamicImports: true,
      },
    ],
    onwarn,
    plugins,
    external: ['react', 'react-dom', "@lit/react"]
  },
];
