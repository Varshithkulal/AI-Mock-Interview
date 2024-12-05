/** @type { import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-interview-mocker_owner:D4etdHCxNwK3@ep-summer-salad-a8kmvg8v.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require',
    }
};