import {ErrorCommon} from '../model/error/ErrorCommon';

export class HandlerHelper {
    static handleRequestPromise(promise): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            promise.then(({data, error}) => {
                if (error)
                    reject(error);
                else
                    resolve(data);
            }).catch(error => {
                reject(new ErrorCommon(10));
            });
        });
    }

    static successResponse(code = 200, data?: any, message?: String) {
        let body: any = {};
        if (data) body.data = data;
        if (message) body.message = message;
        return {
            statusCode: code,
            body: JSON.stringify(body),
        };
    }
}