const isProduction = process.env.NODE_ENV === 'prod'

const devApiConfig = {
    baseUrl: 'http://localhost:3000/api/v1'
}

const prodApiConfig = {
    baseUrl: 'https://website.domain/api/v1'
}

const apiCfg = isProduction ? prodApiConfig : devApiConfig;

export { apiCfg };