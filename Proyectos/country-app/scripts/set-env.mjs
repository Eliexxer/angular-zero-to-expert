import { config } from 'dotenv';
import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const envPath = resolve(root, '.env');
if (existsSync(envPath)) {
  config({ path: envPath });
} else {
  console.warn('.env file not found. Trying to use system environment variables instead.');
}

const apiKey = process.env.REST_COUNTRIES_API_KEY;
if (!apiKey) {
  console.error('REST_COUNTRIES_API_KEY is not defined in .env or system environment variables.');
  process.exit(1);
}

const envContent =
  'export const environment = {\n' +
  "  base_url: 'https://api.restcountries.com/countries/v5/',\n" +
  `  api_key: '${apiKey}',\n` +
  '};\n';

writeFileSync(resolve(root, 'src/environments/environment.ts'), envContent);
writeFileSync(resolve(root, 'src/environments/environment.development.ts'), envContent);

console.log('Environment files generated successfully');
