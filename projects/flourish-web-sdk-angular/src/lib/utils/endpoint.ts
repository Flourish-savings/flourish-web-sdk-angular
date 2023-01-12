import { Environment } from "../enums/environment.enum";
import { Language } from "../enums/language.enum";

export class Endpoint {

    environment: Environment;
    language: Language;
    private _backendUrlMapper: Map<Environment, String>;
    private _frontendUrlMapper: Map<Environment, String>;

    constructor(environment: Environment, language: Language) {
        this.environment = environment;
        this.language = language;
        this._backendUrlMapper = new Map<Environment, String>([
            [Environment.PRODUCTION, "https://api.flourishsavings.com/api/v1"],
            [Environment.STAGING, "https://staging.flourishsavings.com/api/v1"]
        ]);
        this._frontendUrlMapper = new Map<Environment, String>([
            [Environment.PRODUCTION, "https://flourish-app.flourishfi.com"],
            [Environment.STAGING, "https://flourish-app-stg.flourishfi.com"]
        ]);
    }

    get backend(): String | undefined {
        if (this._backendUrlMapper.get(this.environment)) {
            return this._backendUrlMapper.get(this.environment);
        }
        return this._backendUrlMapper.get(Environment.STAGING);
    }

    get frontend(): string {

        let baseUrl;
        let langPath;

        if (this._frontendUrlMapper.get(this.environment)) {
            baseUrl = this._frontendUrlMapper.get(this.environment);
        } else {
            baseUrl = this._frontendUrlMapper.get(Environment.STAGING);
        }

        if (this.language !== undefined && this.language !== null) {
            langPath = this.language;
        } else {
            langPath = '';
        }
        
        return `${baseUrl}/${langPath}`;
    }
}