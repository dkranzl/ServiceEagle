export interface APIAdapter<API, CLIENT> {
    toClient(item: API): CLIENT;
    toApi(item: CLIENT): API;
}