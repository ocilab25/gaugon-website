\# 🧪 QA \& Verification Protocol



\## 1. Visual Acceptance (The "Vibe Check")

\* \[ ] \*\*Mobile Breakpoint:\*\* Does the layout break at 320px (iPhone SE)?

\* \[ ] \*\*Scroll Hygiene:\*\* Is there any horizontal scrollbar on the body? (Fail if yes).

\* \[ ] \*\*Dark Mode:\*\* Are there any accidental white backgrounds flashing on load?



\## 2. Functional Acceptance

\* \[ ] \*\*Form Submission:\*\* Do success/error states appear? (No silent failures).

\* \[ ] \*\*Links:\*\* Do all internal links use `next/link` (SPA navigation)?

\* \[ ] \*\*Images:\*\* Do all images have an `alt` prop?



\## 3. Console Hygiene

\* \[ ] \*\*Errors:\*\* Open Chrome DevTools. Are there any Red errors?

\* \[ ] \*\*Warnings:\*\* Are there unique `key` prop warnings?



\## 4. The "Agent 00" Sign-off

\* If all checks pass: "QA PASSED. Ready for Merge."

\* If any check fails: "QA FAILED. Agent 06, fix \[Item] and resubmit."

## 5. Immutable Infrastructure Check
* [ ] **Scope Boundary:** Verify the diff **does NOT** contain changes to:
    * `docs/agents/*`
    * `rules.md`
    * `PROJECT_CONTEXT.md` (except for status updates)
    * `QA_PROTOCOL.md`
    * **Action:** If these files are present in the diff, FAIL the QA and revert those specific files.

