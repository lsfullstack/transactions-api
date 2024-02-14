import { app } from './app'
import { env } from './env'

app
  .listen({
    port: Number(env.PORT),
    host: ('RENDER' in process.env) ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log(`HTTP Server running in http://localhost:${env.PORT}`)
  })
