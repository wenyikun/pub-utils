import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'es/index.js',
  plugins: [nodeResolve(), commonjs(), terser()],
  output: {
    name: 'jus',
    file: 'dist/bundle.js',
    format: 'umd',
  },
}
