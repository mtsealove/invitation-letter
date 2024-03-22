import axios from "axios";
import {createHmac} from "node:crypto";

const makeSignature = (
    method: string,
    url: string,
    timestamp: string,
    accessKey: string,
    secretKey: string,
): string => {
    const space = ' '; // 공백
    const newLine = '\n'; // 줄바꿈
    const hmac = createHmac('sha256', secretKey);
    hmac.write(method);
    hmac.write(space);
    hmac.write(url);
    hmac.write(newLine);
    hmac.write(timestamp);
    hmac.write(newLine);
    hmac.write(accessKey);
    hmac.end();
    return Buffer.from(hmac.read()).toString('base64');
}

export default defineEventHandler(async (event)=>{
    const {name, message, engage} = await readBody(event);
    const baseUrl  = process.env.NAVER_API_URL;
    const url = '/api/v1/mails';
    const method = 'POST';
    const body = `
    <p><b>성함</b>: ${name}</p>
    <p><b>참석 여부</b>: ${engage==='1'?'참석':'불참'}</p>
    <br/>
    <p><b>축하 메시지</b></p>
    <p>${message}</p>
`;
    try {
        await axios.post(`${baseUrl}${url}`, {
            senderAddress: process.env.NAVER_SENDER_EMAIL,
            senderName: '해시',
            title: '축하 메세지가 도착했어요!',
            body,
            recipients: [{
                address: process.env.NAVER_RECIVDER_EMAIL,
                name: '해시',
                type: 'R',
            }]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'x-ncp-apigw-timestamp': new Date().getTime().toString(10),
                'x-ncp-iam-access-key': process.env.NAVER_ACCESS_KEY,
                'x-ncp-apigw-signature-v2': makeSignature(
                    method,
                    url,
                    new Date().getTime().toString(),
                    process.env.NAVER_ACCESS_KEY,
                    process.env.NAVER_SECRET_KEY,
                ),
                'x-ncp-lang': 'ko-KR',
            }
        })
    } catch (e) {
        console.log(e.response);
    }
    return {
        hello: 'worl'
    }
})
