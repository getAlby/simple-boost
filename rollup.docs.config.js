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
        mangle: { properties: { regex: /^__/ } }
    }),
    summary()
];

const onwarn = (warning) => {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
    }
};

export default {
    input: 'dist/simple-boost.js',
    output: { file: 'docs/simple-boost.bundled.js', format: 'esm', inlineDynamicImports: true },
    onwarn,
    plugins
};
