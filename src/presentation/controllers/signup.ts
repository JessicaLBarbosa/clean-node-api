import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
    handle (httpRequest: HttpRequest) : HttpResponse {
        const requiredFields = ['name', 'email', 'password',]
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamsError(field))
            }
        }
    }
}