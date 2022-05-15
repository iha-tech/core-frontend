import router from './router'
import errorHandler from './error-handler'

export default (app) => {
  app.use(router)

  app.config.errorHandler = errorHandler
}
