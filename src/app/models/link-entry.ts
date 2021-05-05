import { Injectable } from "@angular/core";
import { APIAdapter } from "./api-adapter";

export class LinkEntry {

    constructor(
        private _name: string,
        private _icon: string,
        private _url: string
    ) {}

    public get name(): string {
        return this._name;
    }

    public get icon(): string {
        return this._icon;
    }

    public get url(): string {
        return this._url;
    }

}

@Injectable({
    providedIn: 'root'
})
export class LinkEntryAdapter implements APIAdapter<any, LinkEntry> {

    constructor() {}

    toClient(item: any): LinkEntry {
        return new LinkEntry(item.name, item.icon, item.url);
    }
    
    toApi(item: LinkEntry) {
        if(item == null) {
            return null;
        }
        return {
            name: item.name,
            icon: item.icon,
            url: item.url
        }
    }

}