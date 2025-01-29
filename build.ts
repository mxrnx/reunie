const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

// Define paths
const srcDir = "src";
const distDir = "dist";
const partialsDir = "src/partials";

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Register partials
fs.readdirSync(partialsDir).forEach(file => {
    const name = path.basename(file, ".hbs");
    const partial = fs.readFileSync(path.join(partialsDir, file), "utf8");
    handlebars.registerPartial(name, partial);
});

// Compile and render main templates
fs.readdirSync(srcDir).forEach(file => {
    if (file.endsWith(".hbs")) {
        const template = fs.readFileSync(path.join(srcDir, file), "utf8");
        const compiled = handlebars.compile(template);
        const output = compiled({});

	const outputFile = path.join(distDir, file.replace(".hbs", ".html"));
        fs.writeFileSync(outputFile, output);
        console.log(`Generated: ${outputFile}`);
    }
});
