export class Project{
    public name : string;
    public submission_id : string;
    public technology : string[];
    public url : string;
    public description : string;

    constructor(name:string,submission_id:string,technology:string[],url:string,description:string){
        this.name=name;
        this.submission_id=submission_id;
        this.technology=technology;
        this.url=url;
        this.description=description;
    }
}