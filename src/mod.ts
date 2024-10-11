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
        const TX15 = tables.templates.items["5d43021ca4b9362eab4b5e25"];
        //---------------------------------------------------------------------------------------------
        //TX-15 changes
        TX15._props.weapFireType.push("fullauto");
        TX15._props.bFirerate = 800;
    }
}
module.exports = { mod: new Mod() };