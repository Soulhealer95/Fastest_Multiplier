/**************************** String Arithmetic**************************************
 *
 * Language: JQuery
 * This program defines three functions for string manipulations namely:
 * 1. Sub_arr - Subtraction
 * 2. Sum_arr - Addition
 * 3. rem_lead_zer - removes leading zeroes from a string-number
 * Complexity: ~O(n+m) where n and m are input string lengths
 * Shivam Saxena                                                          Nov 2016
 */

//TODO
function Sub_arr(pat1, pat2)
{
    var len1 = pat1.length;
    var len2 = pat2.length;

    var max_len = len1;
    var big = pat1;
    var min_len = len2;
    var sml = pat2;

    //Always subtract the bigger number from the smaller
    if (len2 > len1 || (len1 == len2 && pat1[0] < pat2[0])) {
        max_len = len2;
        min_len = len1;
        big = pat2;
        sml = pat1;
    }

    var sum = [max_len];
    var carry = 0;
    var init = 0;
    while (init < max_len)
    {
        sum[init] = 0;
        init++;
    }
    for (var i = max_len - 1, j = min_len - 1; i >= 0; i--, j--)
    {
        var temp = 0;
        var curr_big = parseInt(big[i]) + carry;
        //only subtract until smaller number exists
        if (j >= 0) {
            var curr_sml = parseInt(sml[j]);
            if (curr_big < curr_sml)
            {
                temp = ((10 + curr_big) - curr_sml);
                sum[i] += temp;
                carry = -1;
            }
            else
            {
                temp = (curr_big - curr_sml);
                sum[i] += temp;
                carry = 0;
            }
        }
        //otherwise just copy the remaining number from the bigger number
        else
        {
            //carry = -1 and sum[i] = 0
            if (curr_big < 0)
            {
                sum[i] += (10 + curr_big);
                carry = -1;
            }
            else
            {
                sum[i] += (curr_big);
                carry = 0;
            }

        }

    }

    var res = sum.join('');
    res = rem_lead_zer(res);

    return res;
}

//TODO
function Sum_arr(pat1, pat2) {

    var len1 = pat1.length;
    var len2 = pat2.length;

    var max_len = len1;
    var big = pat1;
    var min_len = len2;
    var sml = pat2;
    if (len2 > len1 || (len1 == len2 && pat1[0] < pat2[0])) {
        max_len = len2;
        min_len = len1;
        big = pat2;
        sml = pat1;
    }

    var sum = [max_len + 1];
    var carry = 0;
    var init = 0;
    while (init < max_len + 1) {
        sum[init] = 0;
        init++;
    }
    for (var i = max_len - 1, j = min_len - 1, k = max_len; k >= 0; i--, j--, k--) {
        var temp = 0;
        if (i >= 0) {
            var curr_big = parseInt(big[i]) + carry;
            //only add until smaller number exists
            if (j >= 0) {
                var curr_sml = parseInt(sml[j]);
                temp = (curr_big + curr_sml);
                if (temp % 10 != temp) {
                    sum[k] += temp % 10;
                    carry = ((temp - (temp % 10)) / 10);
                }
                else {
                    sum[k] += temp;
                    carry = 0;
                }
            }
            //otherwise just copy the remaining number from the bigger number
            else
            {
                temp = curr_big;
                if(temp%10 != temp)
                {
                    sum[k] += temp%10;
                    carry = ((temp - (temp % 10)) / 10);
                }
                else
                {
                    sum[k] += temp;
                    carry = 0;
                }
            }
        }
        //else there must be a carry
        else {
            sum[k] += carry;
        }

    }

    var res = sum.join('');
    res = rem_lead_zer(res);


    return res;
}

//TODO
function rem_lead_zer(arr) {
    var counter = 0;
    if (arr.length > 1) {
        while (arr[counter] == '0') {
            counter++;
        }
        if (counter != arr.length) {
            arr = arr.substring(counter, arr.length);
        }
        else
        {
            return "0";
        }
    }
    return arr;
}
