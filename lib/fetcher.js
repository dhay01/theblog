import useSWR from 'swr';

const baseURL = "http://localhost:3000/";

export default function useFetcher(endpoint) {
    const { data, error } = useSWR(`${baseURL}${endpoint}`, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}

function fetcher(url) {
    return fetch(url).then((res) => res.json());
}
