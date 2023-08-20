type GetRequestOptions = {
    headers?: HeadersInit;
    queryParams?: { [key: string]: any };
  };
  
  export const getRequest = async (
    url: string,
    options?: GetRequestOptions
  ): Promise<any> => {
    const { headers = {}, queryParams = {} } = options || {};
  
    const query = new URLSearchParams(queryParams);
  
    const response = await fetch(`${url}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  
    const data = await response.json();
    return data;
  };
  