const RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
const LTR =
  'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF';

const rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
const ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']');

export function getDirection(value: string): 'neutral' | 'ltr' | 'rtl' {
  value = String(value || '');

  if (rtl.test(value)) {
    return 'rtl';
  }

  if (ltr.test(value)) {
    return 'ltr';
  }

  return 'neutral';
}
