export default function formatReplaceEncodedSpaces(input: string): string {
    return input.replace(/%20/g, ' ');
}