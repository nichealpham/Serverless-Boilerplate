import {Greeting} from './app/services/GreetingService';
import {HandlerHelper} from './app/libs/helper/HandlerHelper';

export async function hello (event, context, callback) {
    let greeting = new Greeting('Welcome to my Serverless Template !!!');
    let response = HandlerHelper.createSuccessResponse(200, null, greeting.message);
    callback(null, response);
};
