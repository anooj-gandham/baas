type PostRequestOptions = {
    headers?: HeadersInit;
    body?: any;
    queryParams?: { [key: string]: any };
};

export const postRequest = async (
    url: string,
    options?: PostRequestOptions
): Promise<any> => {
    const { headers = {}, body = null} = options || {};
    const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    // console.log(data);

    return data;
};
