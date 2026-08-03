import base from './base.mjs';
import vue from 'eslint-plugin-vue';

export default [...base, ...vue.configs['flat/recommended']];
