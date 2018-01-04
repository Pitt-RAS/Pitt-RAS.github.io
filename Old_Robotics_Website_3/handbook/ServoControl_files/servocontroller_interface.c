/*       Servo Controller Interface.  Written by Sam Scheinman 11/10/2003

      This file provides an interface between a PIC chip and Mark Smorul's multiple servo-
   controller chip.  The servo controller is implemented in a PIC16F628 and can control up to
   9 hobby servos simultaneously.  It accepts a serial data stream at 115,200 bits per second.
   Data packets are 3 bytes each: 255, address, data
   Address is a number from 0-8, inclusive.  Data is a number from 0-250, inclusive.
   The Servo Controller chip has a Clear to Send output which is set high when the chip is
   ready to receive data.  The CTS line status must be monitored, as writing when the chip is
   not ready (ie. when CTS is low) will lock up the Servo Controller.
      Mark has also put together serial UART buffers, which implement a 64-byte circular
   buffer in a PIC16F628 chip.  The "input" side takes input on a single serial Rx pin.
   The "output" side of the buffer chips implement a serial Tx pin and an RTS input that
   monitors a CTS signal from the Servo Controller.  When the CTS signal is high, the buffer
   chip will send the oldest data in the buffer.  Using the UART buffer protects the Servo
   Controller from buffer overruns and lockup.
      When calling SC_SetServo, use the BUFFERED and NOT_BUFFERED symbols, as defined below,
   depending on whether the buffer chips are in place or not.  This variable determines
   whether or not the CTS pin is checked.
*/

//define the pin which transmits data to the Servo Controller.
//the #ifndef permits SC_Xmit to be redefined in the main program file.
#ifndef SC_Xmit
#define SC_Xmit   PIN_A5   //pin on which data is sent from PIC to servo chip.
#endif

//define the pin which takes input from the Servo Controller's CTS signal.
//the #ifndef permits SC_CTS to be redefined in the main program file.
#ifndef SC_CTS
#define SC_CTS    PIN_A4   //input pin for servo chip's Clear to Send signal.
#endif

#define BUFFERED  (short)1
#define NOT_BUFFERED (short)0

//This function waits for a CTS signal and returns.  Should implement a timeout.
void Check_SC_CTS(){
   if(!input(SC_CTS)) while(!input(SC_CTS)){};  //loop 'till CTS goes high.
   return;
}

//accepts address values from 0-8, data from 0-250.
//buffer_status accepts either a 0 or 1.  Use BUFFERED AND NOT_BUFFERED, defined above.
//returns 1 on success.  zero on failure.  will fail on invalid data.
short SC_SetServo(int address, int data, short buffer_status){
   #use rs232(baud=115200, xmit=PIN_A5,BITS=8,PARITY=N)  //NOTE: serial data is NOT inverted.

   //exit with zero status (failure) if invalid data passed in.
   if(address > 8) return 0;
   if(data > 250) return 0;
   if(buffer_status > 1) return 0;

   //send data to servo controller.  if buffers aren't used, wait for SC_CTS=1.
   if(!buffer_status) Check_SC_CTS();   //if external buffers are NOT used, wait for CTS.
   putc(255);
   if(!buffer_status) Check_SC_CTS();   //if external buffers are NOT used, wait for CTS.
   putc(address);
   if(!buffer_status) Check_SC_CTS();   //if external buffers are NOT used, wait for CTS.
   putc(data);
   return 1;  //Success!
}
