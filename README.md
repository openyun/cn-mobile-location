# cn-mobile-location
中国手机号码归属地接口

# 安装运行
```bash
  git clone https://github.com/openyun/cn-mobile-location.git
  cd cn-mobile-location
  npm install 
  npm start
```
# 接口访问
## curl测试
```bash
curl http://localhost:3000/mobile/13488888888
```
## 返回JSON数据
``` json
{
  "status": 1,
  "message": "success",
  "data": {
    "prefix": "134",
    "mobile": "13488888888",
    "province": "北京",
    "city": "北京",
    "isp": "移动",
    "code": "010",
    "zipcode": "100000",
    "types": "中国移动 GSM"
  },
  "timestamp": 1499345271
}
```