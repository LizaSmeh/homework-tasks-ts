interface TotalInterface {
    price: number,
    discount: number, 
    isInstallment: boolean, 
    months: number
}
const totalPrice = (product: TotalInterface): number => {
    const { price, discount, isInstallment, months } = product;
    const discountPrice = (price * discount) / 100;

    if(isInstallment) {
        return (price - discountPrice) / months
    }
    return (price - discountPrice)
    
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250