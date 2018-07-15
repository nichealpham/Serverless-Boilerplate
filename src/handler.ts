import {Greeting} from './services/GreetingService';

export async function hello (event, context, callback) {
    let greeting = new Greeting();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: greeting.message,
            input: event,
        }),
    };
    callback(null, response);
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
