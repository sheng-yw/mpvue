import Fly from 'flyio/dist/npm/wx';

const fly = new Fly;
export default function (url, data, method='GET') {
  return new Promise((resolve, reject)=>{
    let result = null;
    if (method.toUpperCase() === 'GET'){
      result = fly.get(url,data)
    }else{
      result = fly.post(url, data)
    }
    result
      .then(response =>{
        resolve(response.data);
      })
      .catch(err=>{
        reject(err);
      })

  });

}
