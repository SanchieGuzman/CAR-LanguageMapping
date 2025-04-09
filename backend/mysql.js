import mysql2 from "mysql2";

class Database {
    static instance;

    constructor() {
        this.pool = mysql2.createPool({
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    async testMethod(municipality_id) {
        const query = `SELECT * FROM municipalities WHERE municipality_id = ?`;
        const params = [municipality_id];
        try {
            const results = await this.execute(query, params);
            return results;
        } catch (error) {
            console.log("Error: ", error);
            return { error: 'error' };
        }
    }
    async getMunicipalityLanguageSummation(municipality_id){
        const query = `SELECT SUM(count) AS SUM
                       FROM MUNILANGUAGE WHERE municipality_id = ?`;
        const params = [municipality_id];
    
        try {
            const results = await this.execute(query, params);
            return results[0];
        } catch (error) {
            console.log("Error:", error);
            return { error: 'error' }; 
        }
    }

    async getMunicipalityInformation(municipality_id) {
        const query = `SELECT municipality_name, municipality_image, municipality_information, information_source 
                       FROM municipalities WHERE municipality_id = ?`;
        const params = [municipality_id];
    
        try {
            const results = await this.execute(query, params);
            return results[0];
        } catch (error) {
            console.log("Error:", error);
            return { error: 'error' }; 
        }
    }
    
    async getMunicipalityLanguages(municipality_id) {
        const query_main = `
            SELECT 
                l.language_name,
                SUM(ml.count) AS count
            FROM Municipalities m 
            JOIN MuniLanguage ml ON m.municipality_id = ml.municipality_id
            JOIN Languages l ON ml.language_id = l.language_id
            WHERE m.municipality_id = ?
            GROUP BY m.municipality_id, l.language_id, l.language_name
            ORDER BY count DESC;
        `;
        const params_main = [municipality_id];
    
        try {
            const [municipalityInfo, languages, summation] = await Promise.all([
                this.getMunicipalityInformation(municipality_id), 
                this.execute(query_main, params_main),
                this.getMunicipalityLanguageSummation(municipality_id)   
            ]);
    
            return {
                municipality_id,
                ...municipalityInfo,  
                languages,
                summation             
            };
        } catch (error) {
            console.log("Error: ", error);
            return { error: 'error' };
        }
    }
    execute(query, params = []) {
        return new Promise((resolve, reject) => {
            this.pool.query(query, params, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

export default Database;
