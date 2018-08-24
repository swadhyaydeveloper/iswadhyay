export class Education{
    public institute : string;
    public stream : string;
    public degree : string;
    public start : string;
    public end : string;
    public grade : string;

    constructor(institute:string,stream:string,degree:string,start:string,end:string,grade:string){
        this.institute=institute;
        this.stream=stream;
        this.degree=degree;
        this.start=start;
        this.end=end;
        this.grade=grade;
    }
}