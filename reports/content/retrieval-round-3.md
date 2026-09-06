# CI report — content/retrieval-round-3

Commit: 8f3e16ca6571715cf070f1198097b8fa31462d32  ·  Run: https://github.com/ACEwithaJ/PACU/actions/runs/34034772838

## node -v
```
v20.20.2
```

## npm run validate:selftest
```

> pacu-curriculum@0.0.1 validate:selftest
> node scripts/selftest.mjs

PASS  clean: no findings, exit 0
      validate: 1 ledger rows, 1 days, 1 cards; 0 errors, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-Ig5ZNX/clean-review.md
PASS  rule-00-difficulty: error on 00 only, exit 1
      RULE-00 scripts/fixtures/rule-00-difficulty/content/days/day-01.md 13 quiz.0.difficulty: Invalid enum value. Expected 'basic' | 'advanced' | 'expert', received 'hard'
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-00-difficulty-review.md
PASS  rule-00-exam: error on 00 only, exit 1
      RULE-00 scripts/fixtures/rule-00-exam/content/days/day-01.md 13 quiz.0.examAlignment.0: Invalid enum value. Expected 'ABA-BASIC' | 'ABA-ADVANCED' | 'ITE' | 'nursing', received 'USMLE'
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-00-exam-review.md
PASS  rule-01: error on 01 only, exit 1
      RULE-01 scripts/fixtures/rule-01/content/days/day-01.md 27 slot headings must be exactly: Why it matters · Mechanism · Evidence · What this does not show · At the bedside · Check yourself (out of order)
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-01-review.md
PASS  rule-02: error on 02 only, exit 1
      RULE-02 scripts/fixtures/rule-02/content/days/day-01.md 5 trial_based but no evidence key has design rct or meta_rct
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-02-review.md
PASS  rule-03: error on 03 only, exit 1
      RULE-03 scripts/fixtures/rule-03/content/days/day-01.md 6 consensus_only requires a consensus_basis
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-03-review.md
PASS  rule-04: error on 04 only, exit 1
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 33 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 37 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 41 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 45 citation token [[missing-1999]] is not a ledger key
      validate: 1 ledger rows, 1 days, 0 cards; 4 errors, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-04-review.md
PASS  rule-04-card: error on 04 only, exit 1
      RULE-04 scripts/fixtures/rule-04-card/content/cards/card-hypotension.md 10 citation token [[missing-1999]] is not a ledger key
      validate: 1 ledger rows, 1 days, 1 cards; 1 error, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-04-card-review.md
PASS  rule-05: WARN on 05 only, exit 0
      WARN RULE-05 scripts/fixtures/rule-05/content/ledger/good-2000.yaml 4 good-2000: neither doi nor pmid
      validate: 1 ledger rows, 1 days, 0 cards; 0 errors, 1 warning; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-05-review.md
PASS  rule-05 --strict: error on 05 only, exit 1
      RULE-05 scripts/fixtures/rule-05/content/ledger/good-2000.yaml 4 good-2000: neither doi nor pmid
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-05-strict-review.md (strict)
PASS  rule-06: error on 06 only, exit 1
      RULE-06 scripts/fixtures/rule-06/content/days/day-01.md 13 quiz item "fx-d01-q1" has 2 correct options; exactly one is required
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-06-review.md
PASS  rule-07: error on 07 only, exit 1
      RULE-07 scripts/fixtures/rule-07/content/days/day-01.md 13 every quiz option needs an explanation
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-07-review.md
PASS  rule-08: error on 08 only, exit 1
      RULE-08 scripts/fixtures/rule-08/content/days/day-02.md 13 quiz id "fx-d01-q1" is already used by scripts/fixtures/rule-08/content/days/day-01.md
      validate: 1 ledger rows, 2 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-08-review.md
PASS  rule-09: WARN on 09 only, exit 0
      WARN RULE-09 scripts/fixtures/rule-09/content/ledger/good-2000.yaml 9 good-2000: access is UNVERIFIED
      validate: 1 ledger rows, 1 days, 0 cards; 0 errors, 1 warning; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-09-review.md
PASS  rule-09 --strict: error on 09 only, exit 1
      RULE-09 scripts/fixtures/rule-09/content/ledger/good-2000.yaml 9 good-2000: access is UNVERIFIED
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-09-strict-review.md (strict)
PASS  rule-10: error on 10 only, exit 1
      RULE-10 scripts/fixtures/rule-10/content/days/day-01.md 29 "9.0%" has no [[key]] citation in its paragraph
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-10-review.md
PASS  rule-10-card: error on 10 only, exit 1
      RULE-10 scripts/fixtures/rule-10-card/content/cards/card-hypotension.md 10 "65 mmHg" has no [[key]] citation in its paragraph
      validate: 1 ledger rows, 1 days, 1 cards; 1 error, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-10-card-review.md
PASS  rule-11: error on 11 only, exit 1
      RULE-11 scripts/fixtures/rule-11/content/days/day-01.md 13 "all/none of the above" is not a permitted option
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-11-review.md
PASS  rule-12: error on 12 only, exit 1
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 33 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 37 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 41 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 45 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      validate: 1 ledger rows, 1 days, 0 cards; 4 errors, 0 warnings; 4 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-12-review.md
PASS  rule-13: error on 13 only, exit 1
      RULE-13 scripts/fixtures/rule-13/content/days 1 100% of quiz keys render at position B; the limit is 40%. Change KEY_SALT in src/lib/keyplace.mjs and re-run.
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-13-review.md
PASS  rule-14: error on 14 only, exit 1
      RULE-14 scripts/fixtures/rule-14/content/days/day-01.md 13 quiz item "fx-d01-q1" asks about the site rather than about care
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-14-review.md
PASS  rule-15: error on 15 only, exit 1
      RULE-15 scripts/fixtures/rule-15/content/days/day-01.md 33 general recommendation in content with draft: false: [GENERAL: a widely taught figure of 5 mg that carries no ledger entry]…
      RULE-15 scripts/fixtures/rule-15/content/days/day-01.md 37 general recommendation in content with draft: false: [GENERAL: a widely taught figure of 5 mg that carries no ledger entry]…
      RULE-15 scripts/fixtures/rule-15/content/days/day-01.md 41 general recommendation in content with draft: false: [GENERAL: a widely taught figure of 5 mg that carries no ledger entry]…
      RULE-15 scripts/fixtures/rule-15/content/days/day-01.md 45 general recommendation in content with draft: false: [GENERAL: a widely taught figure of 5 mg that carries no ledger entry]…
      validate: 1 ledger rows, 1 days, 0 cards; 4 errors, 0 warnings; 4 review items -> ../../../../../tmp/pacu-selftest-Ig5ZNX/rule-15-review.md
selftest: all fixtures behaved
```

## npm run validate
```

> pacu-curriculum@0.0.1 validate
> node scripts/validate.mjs

RULE-10 src/content/days/day-16.md 107 "2026 h" has no [[key]] citation in its paragraph
WARN RULE-05 src/content/ledger/asa-pacu-standards-2024.yaml 7 asa-pacu-standards-2024: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-clonidine-label-2022.yaml 7 fda-clonidine-label-2022: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-dexmedetomidine-label-2026.yaml 7 fda-dexmedetomidine-label-2026: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-droperidol-label-2009.yaml 7 fda-droperidol-label-2009: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-flumazenil-label-2025.yaml 7 fda-flumazenil-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-methylene-blue-label-2025.yaml 7 fda-methylene-blue-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-naloxone-label-2023.yaml 7 fda-naloxone-label-2023: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-neostigmine-label-2024.yaml 7 fda-neostigmine-label-2024: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-ondansetron-inj-label-2025.yaml 7 fda-ondansetron-inj-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-scopolamine-label-2026.yaml 7 fda-scopolamine-label-2026: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-succinylcholine-label-2022.yaml 7 fda-succinylcholine-label-2022: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-sugammadex-label-2026.yaml 7 fda-sugammadex-label-2026: neither doi nor pmid
WARN RULE-09 src/content/ledger/gross-2014.yaml 12 gross-2014: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/hausmann-1991.yaml 12 hausmann-1991: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/uppal-2024-rapm.yaml 12 uppal-2024-rapm: access unverified (docs/ledger-debt.md §1)
validate: 107 ledger rows, 20 days, 5 cards; 1 error, 15 warnings; 82 review items -> docs/content-review.md
```

## npm run build
```

> pacu-curriculum@0.0.1 build
> npm run validate && astro build


> pacu-curriculum@0.0.1 validate
> node scripts/validate.mjs

RULE-10 src/content/days/day-16.md 107 "2026 h" has no [[key]] citation in its paragraph
WARN RULE-05 src/content/ledger/asa-pacu-standards-2024.yaml 7 asa-pacu-standards-2024: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-clonidine-label-2022.yaml 7 fda-clonidine-label-2022: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-dexmedetomidine-label-2026.yaml 7 fda-dexmedetomidine-label-2026: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-droperidol-label-2009.yaml 7 fda-droperidol-label-2009: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-flumazenil-label-2025.yaml 7 fda-flumazenil-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-methylene-blue-label-2025.yaml 7 fda-methylene-blue-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-naloxone-label-2023.yaml 7 fda-naloxone-label-2023: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-neostigmine-label-2024.yaml 7 fda-neostigmine-label-2024: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-ondansetron-inj-label-2025.yaml 7 fda-ondansetron-inj-label-2025: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-scopolamine-label-2026.yaml 7 fda-scopolamine-label-2026: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-succinylcholine-label-2022.yaml 7 fda-succinylcholine-label-2022: neither doi nor pmid
WARN RULE-05 src/content/ledger/fda-sugammadex-label-2026.yaml 7 fda-sugammadex-label-2026: neither doi nor pmid
WARN RULE-09 src/content/ledger/gross-2014.yaml 12 gross-2014: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/hausmann-1991.yaml 12 hausmann-1991: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/uppal-2024-rapm.yaml 12 uppal-2024-rapm: access unverified (docs/ledger-debt.md §1)
validate: 107 ledger rows, 20 days, 5 cards; 1 error, 15 warnings; 82 review items -> docs/content-review.md
```

## Day 3 render markers (dist/d/day-03/index.html)
```
dist/d/day-03/index.html not built
```

## Result: RED
