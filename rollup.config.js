import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  dest: 'dist/bundle.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs(),
  ],
};
