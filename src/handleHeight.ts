export default class handleHeight{
  searchDiv: HTMLElement | null;
  map: HTMLElement | null;
  constructor() {
    this.searchDiv = document.querySelector('#search');
    this.map = document.querySelector('#map');

    this.changeHeight = this.changeHeight.bind(this);
    window.addEventListener('resize', this.changeHeight);
  }

  changeHeight() {
    if(this.searchDiv && this.map){
      this.map.style.height = `${window.innerHeight - this.searchDiv.clientHeight}px`;
    }
  }



}