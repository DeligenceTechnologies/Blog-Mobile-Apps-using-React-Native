/**************************************Application server URL setting*************************************/
let METEOR_URL = 'ws://192.168.1.18:3000/websocket'; // change the 192.168.1.15 to your local ip address URL
if (process.env.NODE_ENV === 'production') {	//you can check your local ip address URL by using command 'ifconfig' for Linux
  METEOR_URL = ''; 
}

export const settings = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

export default settings;