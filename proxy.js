
const express = require('express')
const axios = require('axios');
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

app.all('/api/*', async (req, res) =>  {
  try{
    const requestMethod = req.method;
    if(requestMethod === 'GET'){
      const { data } = await axios.get('https://udemy.com/api-2.0'+req.path.replace('/api','/'), {
        params: req.query,
        headers: {
          "Accept": "application/json, text/plain, */*",
          // "Authorization": `Basic ${btoa('uSiUI3kd9MLHngB76b5ER04XfUUZKVem3dIdRUAl:bRPsjdtPzq4hnnYnBR6Y3noDjNJvdrM8l6aDNxtc5uJGXceJcWVVpVw8fCs2L5v94IB5k46RNL1BVG1OThZDoE0iBf8qrf4eAep9EALwPwru53QfWj5Y7uy24S5PkGY5')}`
          "Authorization": "Basic dVNpVUkza2Q5TUxIbmdCNzZiNUVSMDRYZlVVWktWZW0zZElkUlVBbDpiUlBzamR0UHpxNGhublluQlI2WTNub0RqTkp2ZHJNOGw2YUROeHRjNXVKR1hjZUpjV1ZWcFZ3OGZDczJMNXY5NElCNWs0NlJOTDFCVkcxT1RoWkRvRTBpQmY4cXJmNGVBZXA5RUFMd1B3cnU1M1FmV2o1WTd1eTI0UzVQa0dZNQ==",
          "Content-Type": "application/json;charset=utf-8"
        }
      });
      res.json(data)
    }else {

    }
  }catch (e){
    console.log(e.response)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
