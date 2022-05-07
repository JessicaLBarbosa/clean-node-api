import { MissingParamsError, InvalidParamsError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helpers'
import { Controller, EmailValidator, HttpResponse, HttpRequest } from '../protocols'

export class SignUpController implements Controller {
    private readonly emailValidator: EmailValidator
    constructor (emailValidator: EmailValidator) {
        this.emailValidator = emailValidator
    }

    handle (httpRequest: HttpRequest) : HttpResponse {
      try {
        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamsError(field))
            }
        }
        if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
          return badRequest(new InvalidParamsError('passwordConfirmation'))
        }
        const isValid = this.emailValidator.isValid(httpRequest.body.email)
        if (!isValid) {
            return badRequest(new InvalidParamsError('email'))
        }
      } catch (error) {
        return serverError()
      }
    }
}
