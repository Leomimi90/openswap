class Trade {
    constructor(id, cryptocurrency, type, wallet, status) {
        this.id = id;
        this.cryptocurrency = cryptocurrency;
        this.type = type;
        this.wallet = wallet;
        this.status = status;
    }
}

module.exports = {
    Trade: new Trade()
};