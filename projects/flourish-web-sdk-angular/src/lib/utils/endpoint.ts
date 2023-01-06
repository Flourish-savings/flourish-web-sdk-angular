export class Endpoint {

    environment: Environment;
    language: Language;
    private _backendUrlMapper: Map<Environment, String>;
    private _frontendUrlMapper: Map<Environment, String>;

    constructor(environment: Environment, language: Language) {
        this.environment = environment;
        this.language = language;
        this._backendUrlMapper = new Map<Environment, String>([
            [Environment.Production, "https://api.flourishsavings.com/api/v1"],
            [Environment.Staging, "https://staging.flourishsavings.com/api/v1"],
            [Environment.Development, "http://localhost:3000/api/v1"]
        ]);
        this._frontendUrlMapper = new Map<Environment, String>([
            [Environment.Production, "https://flourish-app.flourishfi.com"],
            [Environment.Staging, "https://flourish-app-stg.flourishfi.com"],
            [Environment.Development, "http://localhost:3000"]
        ]);
    }

    get backend(): String | undefined {
        if (this._backendUrlMapper.get(this.environment)) {
            return this._backendUrlMapper.get(this.environment);
        }
        return this._backendUrlMapper.get(Environment.Staging);
    }

    get frontend(): string {

        let baseUrl;
        let langPath;

        if (this._frontendUrlMapper.get(this.environment)) {
            baseUrl = this._frontendUrlMapper.get(this.environment);
        } else {
            baseUrl = this._frontendUrlMapper.get(Environment.Staging);
        }

        if (this.language !== undefined && this.language !== null) {
            langPath = Object.values(this.language);
        } else {
            langPath = '';
        }
        
        return `${baseUrl}/${langPath}`;
    }
}