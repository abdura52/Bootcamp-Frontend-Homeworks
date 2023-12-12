import { Location } from "../../../../modules/models/Location";
import ApiClientBase from "../../apiClientBase/ApiClientBase";

export class LocationEndpointsClient{
    private client:ApiClientBase;

    constructor(client : ApiClientBase){
        this.client = client;
    }

    public async getAsync(){
        return await this.client.getAsync<Array<Location>>("api/locations")
    }
}