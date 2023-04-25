const amqp = require('amqplib');
const template = require('./model');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const db = 'mongodb://localhost:27017'

mongoose.connect(db);

async function consumer() {
    const connection = await amqp.connect('amqp://guest:guest@localhost:5672/');
    const channel = await connection.createChannel();
    const queueName = 'queue-test';
    await channel.assertQueue(queueName);
    
    await channel.consume(queueName, (templateParams) => {
        const data = JSON.parse(templateParams.content.toString());
        template.create({
            name: data.name,
            email: data.email
        });
    }, {noAck: true});
}
consumer();
