import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/js/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
    plugins: [
        resolve(),
        babel({
          exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
      }
  };