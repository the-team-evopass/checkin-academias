let environment = process.env.NODE_ENV?.trim()

if (environment != 'prod' && environment != 'hmg') {
    environment = 'prod'
}

const BaseUrl = environment == 'hmg' ? 'https://us-central1-api-evoppass-dev.cloudfunctions.net' : (
    environment == 'prod' && 'https://us-central1-api-evopass-d943e.cloudfunctions.net'
)
export default BaseUrl