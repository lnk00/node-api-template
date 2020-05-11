const getApiInformation = (ctx) => {
    ctx.body = {
        name: 'What I Love API',
        version: '1.0.0'
    }
}

export {
    getApiInformation
};