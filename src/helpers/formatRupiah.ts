export function formatRupiah(number: number): string {
    const reverse = number.toString().split('').reverse().join('');
    const ribuan = reverse.match(/\d{1,3}/g)?.join('.').split('').reverse().join('');
    return `Rp${ribuan}`;
}