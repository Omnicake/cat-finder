import axios from "axios";

const catApi = {
    getRandomCatPhoto: async () => {
        axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;

        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
            params: {
                limit: 1,
                size: "full"
            }
        });

        const imageUrl = response.data[0].url;

        return imageUrl
    }
}

export default catApi;
