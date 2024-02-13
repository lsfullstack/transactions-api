import { app } from './app'
import { env } from './env'

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log(`HTTP Server running in http://localhost:${env.PORT}`)
  })
