/**************************** Kartasuba Multiplication**************************************
 *
 * Language: JQuery
 * This program returns the Multiplication to two numbers, regardless of length
 * Complexity: ~O(nlog(n))
 * Shivam Saxena                                                          Nov 2016
 */


    //Function Definitions
    function Karat(num1, num2)
    {
        var mLen = num1.length;
        var mLen2 = num2.length;

        //if the lengths are different and not a multiple of a power of 2
        //pad it with leading zeroes to make it a muliple of nearest power of two 2
        if ((mLen != mLen2) || (mLen%2 != 0 && mLen != 1))
        {
            var big_len = mLen >= mLen2? mLen : mLen2;
            var nearest_power_of_2 = Math.pow(2,Math.ceil(Math.log(big_len)/Math.log(2)));

            //padding the parts with zeroes as required
            var padding = (nearest_power_of_2 - (mLen%nearest_power_of_2))%nearest_power_of_2;
            var zer = "0";
            if(mLen == mLen2)
            {
                for (var ind = 0; ind < padding; ind++) {
                    num1 =  zer.concat(num1);
                    num2 =  zer.concat(num2);
                }
            }
            else
            {
                //if lengths are diff you still want the larger power of two for padding on a different length
                var padding2 = (nearest_power_of_2 - (mLen2%nearest_power_of_2))%nearest_power_of_2;
                for (var inda = 0; inda < padding; inda++) {
                    num1 =  zer.concat(num1);
                }
                for (var indb = 0; indb < padding2; indb++) {
                    num2 =  zer.concat(num2);
                }

            }
            //update the new (equal) lengths
            mLen = num1.length;

        }


        if (mLen == 1)
        {
            //if the numbers are single digit, return the product
            var resl = (parseInt(num1) * parseInt(num2)).toString();
            return resl;
        }
        else if(rem_lead_zer(num1) == "0" || rem_lead_zer(num2) == "0")
        {
            //if either one of numbers is zero, their product will simply by zero
            return "0";
        }
        else
        {

            var A = num1.substring(0, (mLen / 2));
            var B = num1.substring((mLen / 2), mLen);
            var C = num2.substring(0, (mLen / 2));
            var D = num2.substring((mLen / 2), mLen);

            var part1 = Karat(A, C);
            var part2 = Karat(B, D);
            /* var part3a = Karat(A, D);
               var part3b = Karat(B, C);
               var part3 = Sum_arr(part3a, part3b);
            */
            var part3a = Sub_arr(Karat(rem_lead_zer(Sum_arr(A,B)),rem_lead_zer(Sum_arr(C,D))),part1);
            var part3 = Sub_arr(part3a,part2).toString();
            //var part3a = Sub_arr(Karat(Sum_arr(A,B),Sum_arr(C,D)),part1);
            //padding the parts with zeroes as required
            for (var i = 0; i < mLen; i++)
            {
                    part1 = part1.concat("0");
                    if (i < mLen / 2)
                    {
                        part3 = part3.concat("0");
                    }
            }

            //adding the numbers digit by digit
            var sum1 = Sum_arr(part1, part2).toString();
            return Sum_arr(sum1, part3);

            }

    }


