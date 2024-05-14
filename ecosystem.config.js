module.exports = {
    apps: [
        {
            name: "MURAGAME_NEXTJS",
            script: "node_modules/next/dist/bin/next",
            args: "start",
            env: {
            NODE_ENV: "production",
            },
            watch: true,
            max_memory_restart: '1G'
        },
    ],
};
