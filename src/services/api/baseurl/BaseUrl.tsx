let environment = process.env.NODE_ENV?.trim()

if (environment != 'prod' && environment != 'hmg') {
    environment = 'prod'
}

const BaseUrl = environment == 'hmg' ? 'https://us-central1-api-evoppass-dev.cloudfunctions.net/v2' : (
    environment == 'prod' && 'https://v2-rfd6rkplda-uc.a.run.app'
)
export default BaseUrl