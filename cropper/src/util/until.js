import axios from 'axios'
export const regMobile = function (mobile) {
	var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (myreg.test(mobile)) {
		return true;
	} else {
		return false;
	}
}

export const uuid = function () {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}


export const getOssToken=function() {
	return new Promise((resolve, reject)=> {
		axios.post( "/upload/getOssToken").then((res) => {
			if(res.data.code===200){
				var data=res.data.data;
				// this.uploadHost=data.host;
				var token = {
					'policy': data.policy,
					'OSSAccessKeyId':data.accessKeyId,
					'success_action_status': '200', //让服务端返回200,不然，默认会返回204
					'signature': data.sign,
					'expire_time': data.expireTime,
					"host":data.host
				};
				resolve(token)
			}else{
				reject(res.data)
			}
		}).catch((err)=>{
			reject(err)
		})
	});
	
}


/*
数字格式化时间(秒为单位，只有分秒)
time:数字
return：（eg）02:00
*/
export const formatRecordTime= (time)=>{
  var leftTime = time;
  var m, s;
  if (leftTime >= 0) {
    // h = Math.floor(leftTime / 60 / 60 % 24);
    m = Math.floor(leftTime / 60 % 60);
    s = Math.floor(leftTime % 60);
    return [m, s].map(formatNumber).join(':');
  }else{
    return "00:00"
  }
  
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const getSystemTime=function(){
  return new Promise((resolve, reject)=>{
    this.axios.get(this.HOST+"/course/getSystemTime").then((res)=>{
      resolve(res.data)
    })
  })
  
}