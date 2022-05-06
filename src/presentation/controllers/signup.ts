import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamsError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'

export class SignUpController {
    handle (httpRequest: HttpRequest) : HttpResponse {
        if (!httpRequest.body.name) {
            return badRequest(new MissingParamsError('name'))
            
        }

        if (!httpRequest.body.email) {
            return badRequest(new MissingParamsError('email'))
        }
    }
}