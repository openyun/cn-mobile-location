# cn-mobile-location

中国手机号码归属地接口

## 环境要求

* [Node.js](https://nodejs.org) v6.2.2 or later

## 安装运行

```bash
  git clone https://github.com/openyun/cn-mobile-location.git
  cd cn-mobile-location
  npm install 
  npm start
```

## 接口相关

### curl测试

```bash
curl http://localhost:3000/mobile/13488888888
```

### 返回JSON数据示例

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

### 字段说明

根节点：

|字段名称| 类型 | 说明 |
|-------|-----|------|
| status | int | 接口消息状态，1=成功，0=失败 |
| message | string | 接口消息内容 |
| data | object | 返回数据 |
| timestamp | int | 时间戳 |

data节点：

| 字段名称 | 类型 | 说明 |
|---------|-----|------|
| prefix | string | 手机号码号段 |
| mobile | string | 查询的手机号码 |
| province | string | 归属地省份 |
| city | string | 归属地城市 |
| isp | string | 运营商 |
| code | string | 行政区号 |
| zipcode | string | 邮政编码 |
| types | string | 运营商描述 |

### JSONP支持

```bash
curl http://localhost:3000/mobile/13488888888?callback=xxx
```

## License

MIT