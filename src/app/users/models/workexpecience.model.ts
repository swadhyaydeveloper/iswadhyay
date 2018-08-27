export class WorkExperience{
    public organization? : string;
    public position? : string;
    public description? : string;
    public start? : string;
    public end? : string;
    public url? : string;

    constructor(organization:string,position:string,description:string,start:string,end:string,url:string){
        this.organization=organization;
        this.position=position;
        this.description=description;
        this.start=start;
        this.end=end;
        this.url=url;
    }
}