/*
   This program accepts analog input from a sharp GP2D12 rangefinder on PIN_A0.
   It outputs the distance reported by the sensor in inches to RS-232 serial, on
   PIN_A5.
*/

#include <16F877.h>
#fuses HS,NOWDT,NOBROWNOUT,NOLVP
#use delay(clock = 20000000)
#use rs232(baud=115200, xmit=PIN_A5,BITS=8,PARITY=N,INVERT) //Invert to talk to PC.

#include "littlesharp_interface.c"  //include AFTER your "#use delay" directive.  makes use of delay_us(). 



#use fast_io(A)
#use fast_io(B)
#use fast_io(C)

#bit heartbeat = 6.7 //put heartbeat on pin B7

void main(){
   int range=0;

   setup_port_a( RA0_ANALOG );
   setup_adc( ADC_CLOCK_INTERNAL );
   set_adc_channel( 0 );

   set_tris_a(0b00010001);  //PorA inputs on pin0, analog, nad A4, serial Rx.
   set_tris_b(0);
   set_tris_c(0);

   while(true){
      heartbeat = ~heartbeat;
      range = read_GP2D12(0); //read the sharp sensor on analog channel 0.
      printf("%u inches\r\n",range);
   }
}









