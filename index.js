const noderfc = require("node-rfc");

const pool = new noderfc.Pool({ connectionParameters: { 
    USER: "CT.TRI",
    PASSWD: "Thejazzage1920",
    ASHOST: "10.1.1.19",
    SYSNR: 00,
    CLIENT: 100,
    LANG: "EN"
 } });

(async () => {
    try {
        // get a client connection instance
        const client = await pool.acquire();

        // invoke ABAP function module, passing structure and table parameters

        // ABAP structure
        const abap_structure = {
            RFCINT4: 345,
            RFCFLOAT: 1.23456789,
            RFCCHAR4: "ABCD",
            RFCDATE: "20180625", // ABAP date format
            // or RFCDATE: new Date('2018-06-25'), // as JavaScript Date object, with clientOption "date"
        };
        // ABAP table
        let abap_table = [abap_structure];

        const result = await client.call("ZMES_MATERIAL", {
            // IMPORTSTRUCT: abap_structure,
            // RFCTABLE: abap_table,
        });

        // check the result
        console.log(result);
    } catch (err) {
        // connection and invocation errors
        console.error(err);
    }
})();