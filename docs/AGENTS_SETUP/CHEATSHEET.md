Command,Action

"""Let's work""","Boot Up. Loads Agent 00, checks files, indexes the team."

can you confirm if Agent 00 and rules.md are up? if gitignore open the rules via terminal



/reload context,Refresh. Forces Agent 00 to re-read PROJECT\_CONTEXT.md and rules.md if you edited them.

/status,Report. Asks Agent 00 who is active and what the current plan is.

"""Override Protocol""",Force. Use this if Agent 00 refuses to read a file because of .gitignore.

if .gitignore issue to read some files Workaround and use a terminal command to read it instead!


//I am closing this chat and need to save our progress.

Please perform the following actions immediately:


0. add in the memory also any prompts that I could use in the future if well structed with persona and others

1. GENERATE A SUMMARY: specific to this session. Include:
   - Key technical decisions made.
   - Exact file paths we modified.
   - Any known bugs or unfinished tasks left over.
   - Specific "lessons learned" (e.g., specific font fixes, database rules).

2. SAVE TO FILE:
   - Create a new file in the directory: `docs/knowledge/`
   - Name the file dynamically using today's date and the topic. Format: `YYYY-MM-DD-topic-slug.md` (e.g., `2025-12-12-invoice-system.md`).
   - If the folder `docs/knowledge/` does not exist, create it.

3. CONFIRMATION:
   - Once the file is created, simply reply "Memory Saved." so I know it is safe to delete this chat.
   //