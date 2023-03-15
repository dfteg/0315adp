const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'63eccd18-9a5e-4180-88e0-be6ad5538116'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
