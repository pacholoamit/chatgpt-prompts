![CI](https://github.com/asoudi1987/chatgpt-prompts/actions/workflows/ci.yml/badge.svg?branch=main)

# Local Autopilot (VS Code Agent + Guardrails)

## What this does

- Lets an AI agent in VS Code run commands and edit files with your approval.
- Uses zsh hardening to avoid paste glitches.
- Provides guardrails in .agent/rules.json.

## Prereqs

- macOS with zsh.
- VS Code with either Continue (Continue.continue) or Cline (saoudrizwan.claude-dev).
- GitHub access to push branches.

## Usage

1. Open this folder in VS Code.
2. Install the recommended extension and allow terminal and file access.
3. Give the agent a task, for example: Create a Node tool that lints and formats the repo, add a make fmt target, run it, commit, and open a PR.
4. Guardrails:
   - Agent should use commands whitelisted in .agent/rules.json.
   - If a command is blocked, the agent must ask for permission first.

## Helpful commands

make bootstrap # installs deps if package.json or requirements.txt exist
make test # runs tests if present
make fmt # formats via Prettier if present

## Notes

- zsh is configured with interactivecomments, nobadpattern, and nonomatch.
- If a VS Code terminal ever fails to start, ensure there is no exec zsh -l line in ~/.zshrc.
