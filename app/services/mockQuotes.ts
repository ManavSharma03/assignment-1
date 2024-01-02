import axiosInterceptorInstance from "./instance"

export const fetchMockQuotes = (): Promise<any[]> => {
   return axiosInterceptorInstance.get('andruxnet/api/random-famous-quotes')
}