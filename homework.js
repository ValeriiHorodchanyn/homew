class Product {
    #id;
    #name;
    #price;
    #description;
    constructor(params) {
        this.#id = params.id
        this.#name = params.name
        this.#price = params.price
        this.#description = params.description
    }
    get id() {
        return this.#id
    }
    set id(id) {
        return id
    }
    get name() {
        return this.#name
    }
    set name(name) {
        return name
    }
    get price() {
        return this.#price
    }
    set price(price) {
        return price
    }
    get description() {
        return this.#description
    }
    set description(description) {
        return description
    }
    getPrice(currency) {
        if (currency === 'USD') {
            return console.log(this.price / 35)
        } else if (currency === 'EUR') {
            return console.log(this.price / 40)
        } else if (currency === 'UAH') {
            return console.log(this.price)
        } else {
            console.log('Currency not found')
        }
    }
    getInfo() {
        console.log(`This Product has a name ${this.name}. His price ${this.price} UAH. ${this.description}`)
    }
}
class Laptop extends Product {
    #screenDiagonal;
    #modelLaptop;
    constructor(laptopParams) {
        super(laptopParams);
        this.#screenDiagonal = laptopParams.screenDiagonal;
        this.#modelLaptop = laptopParams.modelLaptop;
    }
    get screenDiagonal() {
        return this.#screenDiagonal
    }
    set screenDiagonal(screenDiagonal) {
        return screenDiagonal
    }
    get modelLaptop() {
        return this.#modelLaptop
    }
    set modelLaptop(modelLaptop) {
        return modelLaptop
    }
    getInfo() {
        console.log(`This is Laptop ${this.modelLaptop}. His price ${this.price} UAH. His screen diagonal is ${this.screenDiagonal} ${this.description}`)
    }
}
class HeadPhone extends Product {
    #maximumPower;
    #modelHeadPhone;
    constructor(headPhoneParams) {
        super(headPhoneParams);
        this.#maximumPower = headPhoneParams.maximumPower;
        this.#modelHeadPhone = headPhoneParams.modelHeadPhone;
    }
    get maximumPower() {
        return this.#maximumPower
    }
    set maximumPower(maximumPower) {
        return maximumPower
    }
    get modelHeadPhone() {
        return this.#modelHeadPhone
    }
    set modelHeadPhone(modelHeadPhone) {
        return modelHeadPhone
    }
    getInfo() {
        console.log(`This is HeadPhone ${this.modelHeadPhone}. His price ${this.price} UAH. His maximum power is ${this.maximumPower}. ${this.description}`)
    }
}
class Monitor extends Product {
    #resolution;
    #modelMonitor;
    constructor(monitorParams) {
        super(monitorParams);
        this.#resolution = monitorParams.resolution;
        this.#modelMonitor = monitorParams.modelMonitor;
    }
    get resolution() {
        return this.#resolution
    }
    set resolution(resolution) {
        return resolution
    }
    get modelMonitor() {
        return this.#modelMonitor
    }
    set modelMonitor(modelMonitor) {
        return modelMonitor
    }
    getInfo() {
        console.log(`This is Monitor ${this.modelMonitor}. His price ${this.price} UAH. His maximum resolution is ${this.resolution}. ${this.description}`)
    }
}
const laptop01 = new Laptop({
    id: 001,
    name: 'Laptop',
    price: 5900,
    description: 'The best laptop in the world',
    screenDiagonal: 17,
    modelLaptop: 'Lenovo Legion 5'
})
const headPhone01 = new HeadPhone({
    id: 002,
    name: 'Headphone',
    price: 3000,
    description: 'Loudest headphones in the world',
    maximumPower: 85,
    modelHeadPhone: 'Lexibook batman'
})
const monitor01 = new Monitor({
    id: 003,
    name: 'Monitor',
    price: 2400,
    description: 'The largest monitor in the world',
    resolution: '4096×3072',
    modelMonitor: 'SAMSUNG Odyssey G9'
})

laptop01.getInfo()
headPhone01.getInfo()
monitor01.getInfo()
laptop01.getPrice('UAH')
headPhone01.getPrice('USD')
monitor01.getPrice('EUR')







console.log(headPhone01.maximumPower)
console.log(headPhone01.id)
const laptop = new Product({
    id: 010,
    name: 'Product',
    price: 2800,
    description: 'The best product in the world'
})
laptop.getPrice('EUR')
laptop.getInfo()
console.log(laptop.id)
