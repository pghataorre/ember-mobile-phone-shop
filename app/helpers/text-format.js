import { helper } from '@ember/component/helper';

export function textFormat(params) {
  return params[0].toUpperCase();
}

export default helper(textFormat);
