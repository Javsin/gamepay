module.exports = {
    apps: [
        {
            name: "MURAGAME_NEXTJS",
            script: "npm run start-prod",
            env: {
            NODE_ENV: "production",
            },
            watch: true,
            max_memory_restart: '300M'
        },
    ],
};
