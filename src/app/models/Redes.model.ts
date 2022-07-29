export class Redes {
    rdsId? : number;
    rdsFacebook : string; 
    rdsTwiter: string;
    rdsLinkedIn : string;
    rdsGit:  string;
    


    constructor (rdsId: number,rdsFacebook: string, rdsTwiter: string, rdsLinkedIn: string,
        rdsGit: string){
            this.rdsId = rdsId;
            this.rdsFacebook = rdsFacebook;
            this.rdsTwiter = rdsTwiter;
            this.rdsLinkedIn = rdsLinkedIn;
            this.rdsGit = rdsGit;            

    }
}