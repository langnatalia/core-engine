const fs = require('fs');
const path = require('path');

class Parser {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = null;
    }

    async load() {
        try {
            const fileContent = await fs.promises.readFile(this.filePath, 'utf-8');
            this.data = JSON.parse(fileContent);
        } catch (error) {
            throw new Error(`Failed to load or parse file: ${error.message}`);
        }
    }

    get(key) {
        if (!this.data) {
            throw new Error('Data not loaded. Call load() first.');
        }
        return this.data[key];
    }

    set(key, value) {
        if (!this.data) {
            throw new Error('Data not loaded. Call load() first.');
        }
        this.data[key] = value;
    }

    async save() {
        try {
            const jsonString = JSON.stringify(this.data, null, 2);
            await fs.promises.writeFile(this.filePath, jsonString, 'utf-8');
        } catch (error) {
            throw new Error(`Failed to save file: ${error.message}`);
        }
    }
}

module.exports = Parser;