export const fetcher = (url: string) => fetch(url).then((resp) => resp.json());
