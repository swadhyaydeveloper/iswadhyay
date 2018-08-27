export class News{
    public id? : string
    public title? : string;
    public title_description? : string;
    public date? : string;
    public img? : string;
    public description? : string;

    constructor(title:string,title_description:string,date:string,img:string,description:string){
        this.title=title;
        this.title_description=title_description;
        this.date=date;
        this.img=img;
        this.description=description;
    }
}