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

        //Select data
        // const I_MARA = [
        //     {MATNR: '1220000011'},
        //     {MATNR: '1220000012'},
        //     {MATNR: '1220000013'},
        //     {MATNR: '1220000014'},
        //     {MATNR: '1220000015'}
        // ];

        // const result = await client.call("ZMES_MATERIAL", {
        //     I_MARA
        // });

        // for(let M of result.E_MARA){
        //     console.log(M.MANDT + ' ' + M.MATNR + ' ' + M.ERSDA + ' ' + M.CREATED_AT_TIME);
        // }

        //Insert data
        const INPFLDCHECK = 'W';
        const HEADDATA = [
            {
                FUNCTION: 'INS',
                IND_SECTOR: 'M',
                MATL_TYPE: 'A010',
                BASIC_VIEW: 'X',
                SALES_VIEW: 'X',
                PURCHASE_VIEW: 'X',
                MRP_VIEW: 'X',
                WORK_SCHED_VIEW: 'X',
                STORAGE_VIEW: 'X',
                WAREHOUSE_VIEW: 'X',
                QUALITY_VIEW: 'X',
                ACCOUNT_VIEW: 'X',
                COST_VIEW: 'X'
            }
        ];
        const CLIENTDATA = [
            {
                FUNCTION: 'INS',
                MATL_GROUP: '12000001',
                BASE_UOM: 'KG',
                BASE_UOM_ISO: 'KGM',
                NO_SHEETS: '000',
                NET_WEIGHT: '0.000',
                TRANS_GRP: '0001',
                DIVISION: '10',
                QTY_GR_GI: '0.000',
                ALLOWED_WT: '0.000',
                ALLWD_VOL: '0.000',
                WT_TOL_LT: '0.0',
                VOL_TOL_LT: '0.0',
                VAR_ORD_UN: '2',
                ITEM_CAT: 'NORM'
            }
        ];
        const CLIENTDATAX = [
            {
                FUNCTION: 'INS',
                MATL_GROUP: 'X',
                BASE_UOM: 'X',
                BASE_UOM_ISO: 'X',
                TRANS_GRP: 'X',
                DIVISION: 'X',
                VAR_ORD_UN: 'X',
                ITEM_CAT: 'X'
            }
        ];
        const MATERIALDESCRIPTION = [
            {
                FUNCTION: 'INS',
                LANGU: 'E',
                LANGU_ISO: 'EN',
                MATL_DESC: 'description material1'
            }
        ];
        const UNITSOFMEASURE = [
            {
                FUNCTION: 'INS',
                ALT_UNIT: 'KG',
                ALT_UNIT_ISO: 'KGM',
                NUMERATOR: 1,
                DENOMINATR: 1,
                LENGTH: '0.000',
                WIDTH: '0.000',
                HEIGHT: '0.000',
                VOLUME: '0.000',
                GROSS_WT: '0.000',
                UNIT_OF_WT: 'KG',
                UNIT_OF_WT_ISO: 'KGM',
                NESTING_FACTOR: '0',
                MAXIMUM_STACKING: 0,
                CAPACITY_USAGE: '0.000'
            }
        ];
        const UNITSOFMEASUREX = [
            {
                FUNCTION: 'INS',
                ALT_UNIT: 'KG',
                ALT_UNIT_ISO: 'KGM',
                NUMERATOR: 'X',
                DENOMINATR: 'X',
                UNIT_OF_WT: 'X',
                UNIT_OF_WT_ISO: 'X'
            }
        ];
        const MATERIALLONGTEXT = [
            {
                FUNCTION: 'INS',
                APPLOBJECT: 'MATERIAL',
                TEXT_NAME: '000000001200000432',
                TEXT_ID: 'GRUN',
                LANGU: 'E'
            }
        ];

        const result = await client.call("ZCREATE_MATERIAL", {
            INPFLDCHECK,
            HEADDATA,
            CLIENTDATA,
            CLIENTDATAX,
            MATERIALDESCRIPTION,
            UNITSOFMEASURE,
            UNITSOFMEASUREX,
            MATERIALLONGTEXT
        });

        console.log(result.RETURNMESSAGES);
    } catch (err) {
        // connection and invocation errors
        console.error(err);
    }
})();