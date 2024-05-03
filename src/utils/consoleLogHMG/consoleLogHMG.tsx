export default function ConsoleLogHMG (response: number | string | object) {

    const environment = process.env.NODE_ENV?.trim()

    if (environment == 'hmg') {
        console.log(response)
    }

    return
}