/*
   This file provides an interface to the Sharp GP2D12 sensor (the smaller of the 2 rangefinders).
   It consists of a single function: int read_GP2D12(int channel).
   This function takes an int8 argument channel, specifying the analog channel on which to read the sensor.
   The function returns an int8 representing the range to target in inches.  Return values decode as follows:
      0  0V has been read by the ADC.  The GP2D12 cannot output a true 0V reading.  Something is probably wrong with the sensor.
      3-44 range to target in inches.
      100   distance to target is somewhere between 44" and 100".  Be careful, there's a lot of noise in this range
            and false readings in the 3-44" range can be picked up.
      200   a channel value greater than 7 was specified.  No such analog channel exists.
      255   Infinity.  The ADC reports a value of 1 from the GP2D12, optical infinity.
*/

//valid range data starts at 3", so the first nonzero entry in the table is range_table[3].
//indices:               0,1,2,3,   4,  5, 6, 7, 8, 8, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,inf
const int range_table[]={0,0,0,142,122,100,89,79,68,61,55,50,46,44,41,38,36,34,32,31,30,29,28,27,26,25,24,24,23,22,21,20,19,18,17,16,15,14,14,13,12,11,10,10,10,0};

int read_GP2D12(int channel){
   int analog=0,i=255;
   if(channel>7) return 200;  //bad analog channel value.
   set_adc_channel( channel );
   delay_ms(1);
   analog=read_ADC();

   if(analog)  //only test range if analog value is nonzero.
      for(i=3;range_table[i]>analog;i++){}   //empty for loop.  increment range until the obseved ADC value is reached in the table.
   else return 0; //The Sharp GP2D12 can't actually output low enough to register as zero value.  analog==0 probably indicates sensor failure.

   if(i>44){  //if the above for loop doesnt hit on a range value, output either garbage=100, or infinity=255.
      if(analog==1) return 255;   //return infinity.
      else return 100;       //garbage reading somewhere between 44" and 100".
   }
   return i;
}



/* Distance vs. 8bit ADC value for GP2D12 (little) Sharp sensors.
Data recorded Nov 18, 2003 by Sam Scheinman.
inches   analog

1        52    //garbage.  below minimum range.
2        96    //garbage.  below minimum range.   
3        142
4        122
5        100
6        89
7        79
8        68
9        61
10       55
11       50
12       46
13       44
14       41
15       38
16       36
17       34
18       32
19       31
20       30
21       29
22       28
23       27
24       26
25       25
26       24
27       23/24//.  indecisive.
28       23
29       22
30       21
31       20
32       19
33       18
34       17
35       16
36       15
37       14
39       13
40       12
41       11  
42-44    10
above 44, trash.
Infinity=1, starting at 100 inches.
Between 44 and 100 inches, lots of ugly noise.*/
