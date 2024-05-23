const cds = require('@sap/cds');

module.exports = class CatalogService extends cds.ApplicationService {
    async init () {
        this.on('READ', 'Customers', async(req) => {
            const customerService = await cds.connect.to('CustomerService');
            return await customerService.run(req.query);
        })

        this.after('READ', 'Books', each => {
            each.title = each.title + ' --added by event handler';
        })
        return super.init();
    }
}