import { helper } from '@ember/component/helper';

export function currencyFormat(params) {
  return '£' + params[0];
}

export default helper(currencyFormat);
