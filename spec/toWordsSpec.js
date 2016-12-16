'use strict';

var toWords = typeof require !== 'undefined' ? require('../src/toWords') : window.numberToWords.toWords;

describe('toWords', function() {
    var tests = [
        { input: 0.01, expect: "one cent" },
        { input: 0.10, expect: "ten cents" },
        { input: 0, expect: 'zero' },
        { input: 1, expect: 'one dollar' },
        { input: 2, expect: 'two dollars' },
        { input: 3, expect: 'three dollars' },
        { input: 4, expect: 'four dollars' },
        { input: 5, expect: 'five dollars' },
        { input: 6, expect: 'six dollars' },
        { input: 7, expect: 'seven dollars' },
        { input: 8, expect: 'eight dollars' },
        { input: 9, expect: 'nine dollars' },
        { input: 10, expect: 'ten dollars' },
        { input: 11, expect: 'eleven dollars' },
        { input: 12, expect: 'twelve dollars' },
        { input: 13, expect: 'thirteen dollars' },
        { input: 14, expect: 'fourteen dollars' },
        { input: 15, expect: 'fifteen dollars' },
        { input: 16, expect: 'sixteen dollars' },
        { input: 17, expect: 'seventeen dollars' },
        { input: 18, expect: 'eighteen dollars' },
        { input: 19, expect: 'nineteen dollars' },
        { input: 20, expect: 'twenty dollars' },
        { input: 21, expect: 'twenty-one dollars' },
        { input: 22, expect: 'twenty-two dollars' },
        { input: 33, expect: 'thirty-three dollars' },
        { input: 44, expect: 'forty-four dollars' },
        { input: 55, expect: 'fifty-five dollars' },
        { input: 66, expect: 'sixty-six dollars' },
        { input: 77, expect: 'seventy-seven dollars' },
        { input: 88, expect: 'eighty-eight dollars' },
        { input: 99, expect: 'ninety-nine dollars' },
        { input: 100, expect: 'one hundred dollars' },
        { input: 101, expect: 'one hundred one dollars' },
        { input: 110, expect: 'one hundred ten dollars' },
        { input: 111, expect: 'one hundred eleven dollars' },
        { input: 111.01, expect: 'one hundred eleven dollars and one cent' },
        { input: 111.11, expect: 'one hundred eleven dollars and eleven cents' },
        { input: 1000, expect: 'one thousand dollars' },
        { input: 1001, expect: 'one thousand, one dollars' },
        { input: 1010, expect: 'one thousand, ten dollars' },
        { input: 1011, expect: 'one thousand, eleven dollars' },
        { input: 1100, expect: 'one thousand, one hundred dollars' },
        { input: 1101, expect: 'one thousand, one hundred one dollars' },
        { input: 1111, expect: 'one thousand, one hundred eleven dollars' },
        { input: 1111.01, expect: 'one thousand, one hundred eleven dollars and one cent' },
        { input: 1111.11, expect: 'one thousand, one hundred eleven dollars and eleven cents' },
        { input: 10000, expect: 'ten thousand dollars' },
        { input: 2222, expect: 'two thousand, two hundred twenty-two dollars' },
        { input: 10000, expect: 'ten thousand dollars' },
        { input: 33333, expect: 'thirty-three thousand, three hundred thirty-three dollars' },
        { input: 100000, expect: 'one hundred thousand dollars' },
        { input: 444444, expect: 'four hundred forty-four thousand, four hundred forty-four dollars' },
        { input: 1000000, expect: 'one million dollars' },
        { input: 5555555, expect: 'five million, five hundred fifty-five thousand, five hundred fifty-five dollars' },
        { input: 10000000, expect: 'ten million dollars' },
        { input: 66666666, expect: 'sixty-six million, six hundred sixty-six thousand, six hundred sixty-six dollars' },
        { input: 100000000, expect: 'one hundred million dollars' },
        {
            input: 777777777,
            expect: 'seven hundred seventy-seven million, seven hundred seventy-seven thousand, seven hundred seventy-seven dollars'
        },
        { input: 1000000000, expect: 'one billion dollars' },
        {
            input: 8888888888,
            expect: 'eight billion, eight hundred eighty-eight million, eight hundred eighty-eight thousand, eight hundred eighty-eight dollars'
        },
        { input: 10000000000, expect: 'ten billion dollars' },
        {
            input: 99999999999,
            expect: 'ninety-nine billion, nine hundred ninety-nine million, nine hundred ninety-nine thousand, nine hundred ninety-nine dollars'
        },
        { input: 100000000000, expect: 'one hundred billion dollars' },
        {
            input: 111111111111,
            expect: 'one hundred eleven billion, one hundred eleven million, one hundred eleven thousand, one hundred eleven dollars'
        },
        { input: 1000000000000, expect: 'one trillion dollars' },
        {
            input: 2222222222222,
            expect: 'two trillion, two hundred twenty-two billion, two hundred twenty-two million, two hundred twenty-two thousand, two hundred twenty-two dollars'
        },
        { input: 10000000000000, expect: 'ten trillion dollars' },
        {
            input: 33333333333333,
            expect: 'thirty-three trillion, three hundred thirty-three billion, three hundred thirty-three million, three hundred thirty-three thousand, three hundred thirty-three dollars'
        },
        { input: 100000000000000, expect: 'one hundred trillion dollars' },
        {
            input: 444444444444444,
            expect: 'four hundred forty-four trillion, four hundred forty-four billion, four hundred forty-four million, four hundred forty-four thousand, four hundred forty-four dollars'
        },
		{ input: 30006773811208.82, expect: 'thirty trillion, six billion, seven hundred seventy-three million, eight hundred eleven thousand, two hundred eight dollars and eighty-two cents' }
    ];

    function addTest(test) {
        it('should, if passed ' + formatNumber(test.input) + ', return ' + test.expect, function() {
            expect(toWords(test.input)).toEqual(test.expect);
        });
    }

    tests.forEach(addTest);

});

function formatNumber(number) {
    var result = String(number).split('').reverse().map(function(num, index) {
        if (index % 3 === 2) return '.' + num;
        return num;
    }).reverse();
    var length = result.length;
    return result.join('') + ' (' + length + ')';
}
