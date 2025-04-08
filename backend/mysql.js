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
