const accountSid = 'AC3139ddcc927750c5bbbe20bd9128db5b';
const authToken = '57ed870a18ebe5512b5f853ca5842c62';
const client = require('twilio')(accountSid, authToken);

// var customer_phone_number = [
//     '+18682916682',
//     '+18687767473',
//     '+18687195976',
//     '+18683586836',
//     '+18682905134',
//     '+18687721966',
//     '+18682945655',
//     '+18682870501'
// ];

const twilio_number = '+972524725643';
const message_service_sid = 'MG2092d357ff40798f6e2d39fad2790b78';
const sender_id = "Tatil Life";
const text = "Hello, Twilio Test!";
// customer_phone_number.forEach(customer => {

// client.messages
//     .create({
//         body: text,
//         from: twilio_number,
//         to: "+79841503251"
//     })
//     .then(message => console.log(message.sid))
//     .catch(err => console.log("error", err));

client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '+79841503251',
        from: twilio_number
    })
    .then(call => console.log(call.sid))
    .catch(err => console.log("error", err));
// });
