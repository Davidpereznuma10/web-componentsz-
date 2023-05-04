let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myFooter extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            Promise.resolve(myFooter.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
            })
        }
}
customElements.define(name, myFooter)