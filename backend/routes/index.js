import { userRouter } from "./userRoute.js"


export const registerRouter = (app) => {
    app.use('/users', userRouter)
}