# SuperGemini Plugin for Gemini CLI

This plugin integrates the power of SuperGemini templates directly into the Gemini CLI, allowing you to run complex, multi-dimensional commands as native CLI subcommands.

## Installation

> **Prerequisites:** You must have [Node.js](https://nodejs.org/) (v18+) and npm installed.

To install the plugin, clone this repository (or use your local copy) and run the global npm installation command from the project's root directory.

1.  **Navigate to the plugin directory:**
    ```bash
    cd /path/to/supergemini-plugin
    ```

2.  **Install globally using npm:**
    ```bash
    npm install -g .
    ```
    *Note: On Linux or macOS, you may need to prepend `sudo` if you encounter permission errors (`sudo npm install -g .`).*

3.  **Verify the installation:**
    After installation, you can list all active Gemini extensions to ensure it was loaded correctly.
    ```bash
    gemini --list-extensions
    ```
    You should see `supergemini-plugin` in the list.

## How it Works

This plugin automatically scans your `~/.gemini/commands/` directory for SuperGemini's `.md` template files. It then dynamically registers each template as a new `super-*` subcommand within the Gemini CLI.

For example, the `analyze.md` template becomes the `gemini super-analyze` command. The plugin correctly handles positional arguments and flags (e.g., `--env prod`, `--think-hard`).

## Usage Examples

Once installed, you can call any SuperGemini command directly from your terminal.

**Basic Example:**
```bash
gemini super-analyze "my-source-code-folder"
```

**Advanced Example with Flags:**
The plugin correctly parses and passes along all flags to the SuperGemini template.
```bash
gemini super-deploy . --rollback --ultrathink --persona-analyst
```

## Commands Reference

Here is a complete list of the commands provided by this plugin.

### 🧠 Development Commands

| Command | Description |
| --- | --- |
| `gemini super-build [input]` | Build project code, automatically configuring build pipelines and dependencies. |
| `gemini super-dev-setup [input]` | Set up the development environment and automatically generate configuration and installation tool chains. |
| `gemini super-test [input]` | Run the test framework and generate test cases and coverage reports. |

### 🔍 Analysis and Improvement

| Command | Description |
| --- | --- |
| `gemini super-review [input]` | Perform AI-driven code reviews on the code and make suggestions for evidence-based improvements. |
| `gemini super-analyze [input]` | Perform code or system structure analysis to locate potential problems and architectural bottlenecks. |
| `gemini super-troubleshoot [input]` | Production environment-level troubleshooting. Example: `... --prod --five-whys` |
| `gemini super-improve [input]` | Optimize code performance, readability and structure, and propose improvement solutions. |
| `gemini super-explain [input]` | Generates detailed documentation and instructions for code or modules, suitable for quick understanding. |

### 🚀 Operations & Security

| Command | Description |
| --- | --- |
| `gemini super-deploy [input]` | Deploy the application to the target environment and automatically generate the deployment script. |
| `gemini super-migrate [input]` | Execute database or code migration, and automatically generate migration policies and scripts. |
| `gemini super-scan [input]` | Complete security scanning and verification and capture potential vulnerabilities. |
| `gemini super-estimate [input]` | Generate time cost or development estimates for project tasks or functions. |
| `gemini super-cleanup [input]` | Perform project maintenance and cleaning operations, such as deleting old files and compressing logs. |
| `gemini super-git [input]` | Automate Git workflows and generate submissions, branches, and PR suggestions. |

### ንድ Design and Workflow

| Command | Description |
| --- | --- |
| `gemini super-design [input]` | Generate system design architecture, component relationship diagram and interface definition. |
| `gemini super-spawn [input]` | Executes parallel tasks or scripts, optimizes task queues and resource allocation. |
| `gemini super-document [input]` | Write project or module documents, generate README, API docs, etc. |
| `gemini super-load [input]` | Load the project context (code, dependency, database, etc.), and initialize the AI ​​analysis environment. |
| `gemini super-task [input]` | Task management, dismantling large targets into executable tasks lists and priority suggestions. |
