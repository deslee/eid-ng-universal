export class Content {
    public id: string;
    public title: string;
    public type: string;
    public categories: string[];
    public tags: string[];
    public publishedDate: string;
    public updatedDate: string;
    public author: string;
    public metaDescription: string;
    public summary: string;
    public content: string;
    public properties: { [s: string]: any }
}