const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '81b06d64c340c1c8ae17a7e0845e41cf',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;