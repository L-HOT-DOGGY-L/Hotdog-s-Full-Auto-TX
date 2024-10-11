var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const path_1 = __importDefault(require("path"));
class Mod {
    preAkiLoad(container) {
        const logger = container.resolve("WinstonLogger");
        logger.logWithColor("spray and pray", LogTextColor_1.LogTextColor.GREEN);
    }
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const saiga9 = tables.templates.items["59f9cabd86f7743a10721f46"];
        //---------------------------------------------------------------------------------------------
        //saiga-9 changes
        saiga9._props.weapFireType.push("fullauto");
        saiga9._props.bFirerate = 800;
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map