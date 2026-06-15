const cds = require('@sap/cds')

module.exports = class CatalogService extends cds.ApplicationService {
    async init() {

        // Auto-calculate discount after READ
        this.after('READ', 'Books', (books) => {
            books.forEach(book => {
                book.discount = book.price * 0.9
            })
        })

        // Validate price before CREATE
        this.before('CREATE', 'Books', (req) => {
            if (req.data.price < 0) {
                req.error(400, 'Price cannot be negative')
            }
        })

        await super.init()
    }
}