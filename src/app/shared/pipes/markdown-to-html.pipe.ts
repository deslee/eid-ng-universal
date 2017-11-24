import { Pipe, PipeTransform } from "@angular/core";
import * as MarkdownIt from 'markdown-it';

@Pipe({
    name: 'markdownToHtml'
})
export class MarkdownToHtml implements PipeTransform {
    private markdown: MarkdownIt.MarkdownIt;

    constructor() {
        this.markdown = MarkdownIt();
    }

    transform(markdown: string): string {
        return this.markdown.render(markdown);
    }
} 