import { Skill } from './skill.model';
import { WorkExperience } from './workexpecience.model';
import { Education } from './education.model';
import { Project } from './project.model';

export class User{
    public name : string;
    public email : string;
    public mobile : string;
    public dob : string;
    public city : string;
    public profile_img : string;
    public video_resume : string;
    public profession : string;
    public tagline : string;
    public skills : Skill[];
    public workexperience : WorkExperience[];
    public education : Education[];
    public projects : Project[];
    constructor(name:string,email:string,mobile:string,dob:string,city:string,profile_img:string,video_resume:string,profession:string,tagline:string,skills:Skill[],workexperience:WorkExperience[],education:Education[],projects:Project[]){
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.dob=dob;
        this.city=city;
        this.profile_img=profile_img;
        this.video_resume=video_resume;
        this.profession=profession;
        this.tagline=tagline;
        this.skills=skills;
        this.workexperience=workexperience;
        this.education=education;
        this.projects=projects;

    }
}