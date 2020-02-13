export class LoginUser {
    constructor(access_token: string, userid: string, username: string, fullname: string, email: string) {
        this.access_token = access_token;
        this.userid = userid;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
    }

    public access_token: string;
    public userid: string;
    public username: string;
    public fullname: string;
    public email: string;
}