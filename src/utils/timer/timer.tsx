export default async function Timer (milliseconds: number) : Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 50));
    console.log(`Tempo de espera -> ${milliseconds/1000} segundos`);
}