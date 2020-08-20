const accountSid = 'AC3139ddcc927750c5bbbe20bd9128db5b';
const authToken = '57ed870a18ebe5512b5f853ca5842c62';
const client = require('twilio')(accountSid, authToken);
const csv = require('csv-parser');
const fs = require('fs');

var customer_phone_number = [];

const twilio_number = '+972524725643';
const message_service_sid = 'MG2092d357ff40798f6e2d39fad2790b78';
const sender_id = "Tatil Life";
const text = "Hello, Twilio Test!";

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', async (row) => {
        // customer_phone_number.push('+1' + row.Phone);
        // await setTimeout(function () {
        //     console.log('+1' + row.Phone);
        // }, 1000)

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('+1' + row.Phone), 1000)
        });

        let result = await promise; // wait until the promise resolves (*)

        console.log(result);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');

        customer_phone_number.forEach(async customer => {

            // client.messages
            //     .create({
            //         body: text,
            //         from: twilio_number,
            //         to: "+79841503251"
            //     })
            //     .then(message => console.log(message.sid))
            //     .catch(err => console.log("error", err));

        });

    });
console.log("cool");
