import fs from "fs";
import path from "path";

export const name = "supergemini";

export function register(cli) {
  const base = path.join(process.env.HOME, ".gemini", "commands");

  let files;
  try {
    files = fs.readdirSync(base);
  } catch (err) {
    console.error("⚠️ Cannot read ~/.gemini/commands:", err.message);
    return;
  }

  files.filter(f => f.endsWith(".md")).forEach(f => {
    const cmd = path.basename(f, ".md");
    const alias = `super-${cmd}`;
    cli
      .command(`${alias} [input]`)
      .description(`SuperGemini: run /${cmd}`)
      .action(async (input = "") => {
        const mdPath = path.join(base, f);
        await cli.run(`@${mdPath} ${input}`.trim());
      });
  });
}
