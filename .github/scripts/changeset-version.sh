#!/usr/bin/env bash
set -euo pipefail

# changesets/action's `version` input is executed directly (no shell), so
# `&&`-chaining a second command doesn't work there. This script exists so
# changeset version and the lockfile refresh it requires (changesets bumps
# internal dependency ranges in package.json but never touches
# pnpm-lock.yaml) run as two real steps.
pnpm exec changeset version
pnpm install --lockfile-only
