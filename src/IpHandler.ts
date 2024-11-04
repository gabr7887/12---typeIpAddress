import Map from "./Map";

interface ipSearch {
  as: {
    asn: number;
    domain:string;
    name: string;
    route: string;
    type: string;
  }
  domais: string[];
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    geonameId:number;
    lat:number;
    lng:number;
    postalCode: string;
    region: string;
    timezone: string;
  }
}

export default class IpHandler{
  form: HTMLFormElement | null;
  formInput: HTMLElement | null;
  infoDiv: HTMLElement | null;
  ipElement: HTMLElement | null;
  locationElement: HTMLElement | null;
  timeElement: HTMLElement | null;
  ispElement: HTMLElement | null;
  data: ipSearch | null;
  Map: Map;
  constructor(infoDivId: string, map: Map) {
    this.form = document.forms[0];
    this.formInput = document.getElementById('ip');
    this.infoDiv = document.getElementById(infoDivId);
    this.ipElement = this.infoDiv ? this.infoDiv.querySelector('#ipResult') : null;
    this.locationElement = this.infoDiv ? this.infoDiv.querySelector('#locationResult') : null;
    this.timeElement = this.infoDiv ? this.infoDiv.querySelector('#timeResult') : null;
    this.ispElement = this.infoDiv ? this.infoDiv.querySelector('#ispResult') : null;
    this.data = null;
    this.Map = map;

    this.handleForm = this.handleForm.bind(this);

    this.form?.addEventListener('submit', this.handleForm);

  }

  async handleForm(event: Event) {
    event.preventDefault();
    if((!this.form) || !(this.formInput instanceof HTMLInputElement)) throw new Error('form invalido');

    try{
      if(!this.formInput.value.length) throw new Error('input vazio');
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WDFbPDuuTyt5oL9EQb36L4Asw1Fxg&ipAddress=${this.formInput.value}`);
      const dados: ipSearch = await response.json();
      this.data = dados;
      this.Map.setLocation(dados.location.lat, dados.location.lng);
    } catch(e: unknown) {
        if(e instanceof Error) console.log("um erro aconteceu");
    }
  }
}