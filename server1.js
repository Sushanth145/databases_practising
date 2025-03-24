const Redis = require('ioredis')
const redis = new Redis("rediss://default:AZ8nAAIjcDExZDNjNmFlNmNhNjI0MWE2YTdhYjA3NmUxMjhkZGFiN3AxMA@legal-pig-40743.upstash.io:6379")

redis.on('connect', () => console.log('Connected'))
redis.set('name','sushanth')
redis.get('name').then(value => console.log(value))
redis.set('age',25)
redis.get('age').then(value => console.log(value))

redis.setex('session:user1', 60, 'active')
redis.get('session').then(value => console.log(value))
redis.exists('name').then(res => console.log(res ? 'Key Exists' : 'Key Not Found'));
redis.exists('session').then(res => console.log(res ? 'Key Exists' : 'Key Not Found'));
redis.incr('age')
redis.get('age').then(value => console.log(value))

redis.hset('user:1', 'name', 'Sushanth', 'age', '22');
redis.hgetall('user:1').then(res => console.log(res));
redis.flushall().then(() => console.log('All Redis data deleted!'));
