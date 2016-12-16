/**
 * Convert decimal to words
 */

function toWords(s) {
  // check zero
  if (s === 0) {
    return 'zero'
  }

  // Numbering systems by locale
  var thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
  var thousands_gb = ['', 'thousand', 'million', 'milliard', 'billion'];

  var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tweens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var currency = 'dollar';

  var cop = s;
  cop = parseInt(s, 10);
  s = s.toString();
  s = s.replace(/[\, ]/g, '');
  if (s != parseFloat(s)) return 'not a number';
  var x = s.indexOf('.');
  var fulllength = s.length;
  if (x == -1) x = fulllength;
  if (x > 15) return 'too big';
  if (fulllength - 1 == x + 1) {
    s = s + '0';
    fulllength++;
  }
  var startpos = x + 1;
  var n = s.split('');
  var str = '';
  var str1 = '';
  var sk = 0;
  var dashed = false;
  var strThousands = '';
  var comma = '';
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == '1') {
        str += comma + teens[Number(n[i + 1])] + ' ';
        comma = '';
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += comma + tweens[n[i] - 2];
        comma = '';
        if (n[i + 1] == 0) {
          str += ' ';
        }
        //        str += tweens[n[i] - 2] + ' ';
        sk = 1;
        dashed = true;
      }
    } else if (n[i] != 0) {
      if (dashed) {
        str += '-' + digits[n[i]] + ' ';
        dashed = false;
      } else {
        str += comma + digits[n[i]] + ' ';
        comma = '';
      }
      if ((x - i) % 3 == 0) str += 'hundred ';
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      strThousands = thousands[(x - i - 1) / 3];
      if (sk && strThousands != '') {
        str += strThousands;
        comma = ', ';
      }
      sk = 0;
      dashed = false;
    }
  }
  if (str != '') {
    if (comma != '') {
      str += ' ';
      comma = '';
    }
    if (cop === 1) {
      str += currency + ' ';
    } else {
      str += currency + 's' + ' ';
    }
  }
  cop = parseInt(s.substring(x + 1), 10);
  if (x != s.length && cop != 0) {
    if (str != '') {
      str += 'and ';
    }
    str1 += 'cent';
    var j = startpos;
    dashed = false;
    for (var i = j; i < fulllength; i++) {
      if ((fulllength - i) % 3 == 2) {
        if (n[i] == '1') {
          // str += teens[Number(n[i + 1])];
          str += teens[Number(n[i + 1])] + ' ';
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tweens[n[i] - 2];
          dashed = 1;
          sk = 1;
        }
      } else if (n[i] != 0) {
        if (dashed) {
          str += '-' + digits[n[i]] + ' ';
          dashed = false;
        } else {
          str += digits[n[i]] + ' ';
        }
        if ((fulllength - i) % 3 == 0) str += 'hundred '
        sk = 1;
      }
      if ((fulllength - i) % 3 == 1) {
        if (sk) str += thousands[(fulllength - i - 1) / 3] + ' ';
        sk = 0;
      }
    }
    if (cop === 1) {
      str += str1;
    } else {
      str += str1 + 's' + ' ';
    }
  }
  var result = str.replace(/\s+/g, ' ');
  return result.trim();
}

