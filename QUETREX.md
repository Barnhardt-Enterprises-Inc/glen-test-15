# Project Rules

## Verification
```bash
timeout 120 npm run type-check
timeout 60 npm run lint
timeout 120 npx vitest run
timeout 300 npm run build
```
