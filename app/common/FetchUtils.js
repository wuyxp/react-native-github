/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/16 上午11:02
 */

import Urls from './Urls'
import Utils from './Utils'
export const Fetch = (url, method, params) => {
    const header = new Headers({
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    });
    const options = {
        method,
        header,
    };
    let toUrl = Urls.host + url;
    if(method === 'get'){
        const strParams = Utils.stringifyParams(params);
        if(strParams){
            toUrl += '?' + strParams;
        }
        delete options.body
    }else{
        options.body = params;
    }
    console.log("请求发起：-----------");
    console.log("请求url：-----------");
    console.log(toUrl);
    console.log("请求options：-----------");
    console.log(options);
    return fetch(toUrl, options).then(res => res.json()).then(res => {
        console.log("请求接口结果：-----------");
        console.log(res);
        return res;
    }).catch(err => err);
}
export const postFetch = (url, params = {}) => {

    return Fetch(url, 'post', params)

}
export const getFetch = (url, params = {}) => {

    return Fetch(url, 'get', params)
}