
type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (callback: CallBack) => void;

function sendRequest1 (callback: CallBack): void {
    if(callback) {
        callback(null, {message: 'Todo salio bien!'});
    }
};

const sendRequest2: SendRequest = (callback: CallBack): void => {
    if(callback) {
        callback(null, {message: 'Todo salio bien!'});
    }
};