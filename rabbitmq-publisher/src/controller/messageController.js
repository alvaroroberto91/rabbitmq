const amqp = require('amqplib');

exports.messageController = async (req, res) => {
    try{
        const queueName = 'queue-test'
        const queueOptions = {durable: true}
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672/');
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName, queueOptions);
        
        const messageToSend = req.body;

        Object.keys(messageToSend).map(key => {
            const messageToSave = JSON.stringify(messageToSend[key])
            channel.sendToQueue(queueName, Buffer.from(messageToSave));
        });

        await channel.close();
        await connection.close();
        return res.status(200).json("ok");
    

    }catch (error) {
        return res.status(500).json(error.message);
    }
}