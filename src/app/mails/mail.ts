export class Mail {
    email : string;
    importance : boolean;
    subject : string;
    content : string;
    constructor(email: string, importance: boolean, subject: string, content: string) {
        this.email = email;
        this.importance = importance;
        this.subject = subject;
        this.content = content;
    }
}
