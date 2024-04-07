import React from 'react'
import { Button } from './components/ui/button'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { IoWarning } from "react-icons/io5";

type ErrorPageProps = {
  errorCode?: string | number // Status code, such as "404"
  errorName?: string // Human-readable status text, such as "Not Found"
  errorMessage?: string // Additional details on the status code, such as trouble-shooting guidance
}

/**
 * This function is used as a fallback when a value is passed to the "errorCode" prop, but not the "errorName" prop.
 * 
 * @param errorCode - Status code (404, 500, etc.)
 * @returns - Message containing human-readable "reason phrase" for the specified status code; defaults to "Undefined"
 */
const getErrorName = (errorCode: string | number): string => {
  if (typeof errorCode === "string") errorCode = parseInt(errorCode)

  switch(errorCode){
    case 400:
      return "Bad Request"
    case 401:
      return "Unauthorized"
    case 403:
      return "Forbidden"
    case 404:
      return "Not Found"
    case 408:
      return "Request Timeout"
    case 500:
      return "Internal Server Error"
    case 502:
      return "Bad Gateway"
    case 503:
      return "Service Unavailable"
    case 504:
      return "Gateway Timeout"
    default:
      return "Undefined"
  }
}

/**
 * This function is used as a fallback when no value is passed to the "errorMessage" prop.
 * 
 * @param errorCode - Status code (404, 500, etc.)
 * @returns Message containing additional details about the specified status code; defaults to "An error has occurred."
 */
const getErrorMessage = (errorCode: string | number): string => {
    if (typeof errorCode === "string") errorCode = parseInt(errorCode)

    switch(errorCode){
      case 400:
        return "The server did not understand your request. Please clear your browser cache or modify the request before trying again."
      case 401:
        return "Authentication failed. Please try again."
      case 403:
        return "You do not have permission to access this resource. If this doesn't seem right, please check if you are logged into the correct account."
      case 404:
        return "The page you are looking for either does not exist or it has changed locations. Please check if you have the correct URL address."
      case 408:
        return "The server timed out while waiting for your request. Please refresh the page and try again."
      case 500:
        return "There was an unexpected internal server error. Please try again."
      case 502:
        return "The server, while acting as a gateway or proxy, received an invalid response from the upstream server. Please try again."
      case 503:
        return "The server is unavailable right now. Please try again later."
      case 504:
        return "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. Please try again."
      default:
        return "An error has occurred."
    }
}

const ErrorPage: React.FC<ErrorPageProps> = ({
                                              errorCode, 
                                              errorMessage, 
                                              errorName
                                            }) => {
  const error = useRouteError()
  
  return (
    <>
      <main className="min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* // Error status code & name */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-destructive">
            {
              errorCode ? "Error " + errorCode + ": " + 
                (errorName ? errorName : getErrorName(errorCode))
              : "Error " + (isRouteErrorResponse(error) ? error.status : "Undefined") + ": " + 
                (errorName ? errorName : (isRouteErrorResponse(error) ? error.statusText : "Undefined"))
            }
          </h1>

          {/* // Warning symbol  */}
          <IoWarning className="mx-auto mt-6" size="100px"/>
          
          {/* // Error message */}
          <p className="mt-6 text-base leading-7">
            {
              errorMessage ? errorMessage 
              : (errorCode ? getErrorMessage(errorCode) 
                : (isRouteErrorResponse(error) ? getErrorMessage(error.status)
                  : "An error has occured."))
            }
          </p>
          
          {/* // Navigation */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <Button variant="default" size="lg">Return Home</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
