import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPostsList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/`);
        return response;
    } catch (err: any) {
        return err;
    }
};
const getPostDetail = async ({ id }: { id: string }) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        return response;
    } catch (err: any) {
        return err;
    }
};

export { getPostsList, getPostDetail };
