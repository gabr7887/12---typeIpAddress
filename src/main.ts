import Map from "./Map";
import IpHandler from "./IpHandler";
import handleHeight from "./handleHeight";

const gerarMap = new Map();
gerarMap.initMap();

const gerarId = new IpHandler('info', gerarMap);

const mudarHeight = new handleHeight();
mudarHeight.changeHeight();