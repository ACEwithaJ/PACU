# CI report — ledger/driver-2021

Commit: 7aa6620e8dbd0fb487a1db472cffd00232de3827  ·  Run: https://github.com/ACEwithaJ/PACU/actions/runs/33976949977

## node -v
```
v20.20.2
```

## npm run validate:selftest
```

> pacu-curriculum@0.0.1 validate:selftest
> node scripts/selftest.mjs

PASS  clean: no findings, exit 0
      validate: 1 ledger rows, 1 days, 1 cards; 0 errors, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-rmFhDn/clean-review.md
PASS  rule-00-difficulty: error on 00 only, exit 1
      RULE-00 scripts/fixtures/rule-00-difficulty/content/days/day-01.md 13 quiz.0.difficulty: Invalid enum value. Expected 'basic' | 'advanced' | 'expert', received 'hard'
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-00-difficulty-review.md
PASS  rule-00-exam: error on 00 only, exit 1
      RULE-00 scripts/fixtures/rule-00-exam/content/days/day-01.md 13 quiz.0.examAlignment.0: Invalid enum value. Expected 'ABA-BASIC' | 'ABA-ADVANCED' | 'ITE' | 'nursing', received 'USMLE'
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-00-exam-review.md
PASS  rule-01: error on 01 only, exit 1
      RULE-01 scripts/fixtures/rule-01/content/days/day-01.md 27 slot headings must be exactly: Why it matters · Mechanism · Evidence · What this does not show · At the bedside · Check yourself (out of order)
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-01-review.md
PASS  rule-02: error on 02 only, exit 1
      RULE-02 scripts/fixtures/rule-02/content/days/day-01.md 5 trial_based but no evidence key has design rct or meta_rct
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-02-review.md
PASS  rule-03: error on 03 only, exit 1
      RULE-03 scripts/fixtures/rule-03/content/days/day-01.md 6 consensus_only requires a consensus_basis
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-03-review.md
PASS  rule-04: error on 04 only, exit 1
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 33 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 37 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 41 citation token [[missing-1999]] is not a ledger key
      RULE-04 scripts/fixtures/rule-04/content/days/day-01.md 45 citation token [[missing-1999]] is not a ledger key
      validate: 1 ledger rows, 1 days, 0 cards; 4 errors, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-04-review.md
PASS  rule-04-card: error on 04 only, exit 1
      RULE-04 scripts/fixtures/rule-04-card/content/cards/card-hypotension.md 10 citation token [[missing-1999]] is not a ledger key
      validate: 1 ledger rows, 1 days, 1 cards; 1 error, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-04-card-review.md
PASS  rule-05: WARN on 05 only, exit 0
      WARN RULE-05 scripts/fixtures/rule-05/content/ledger/good-2000.yaml 4 good-2000: neither doi nor pmid
      validate: 1 ledger rows, 1 days, 0 cards; 0 errors, 1 warning; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-05-review.md
PASS  rule-05 --strict: error on 05 only, exit 1
      RULE-05 scripts/fixtures/rule-05/content/ledger/good-2000.yaml 4 good-2000: neither doi nor pmid
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-05-strict-review.md (strict)
PASS  rule-06: error on 06 only, exit 1
      RULE-06 scripts/fixtures/rule-06/content/days/day-01.md 13 quiz item "fx-d01-q1" has 2 correct options; exactly one is required
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-06-review.md
PASS  rule-07: error on 07 only, exit 1
      RULE-07 scripts/fixtures/rule-07/content/days/day-01.md 13 every quiz option needs an explanation
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-07-review.md
PASS  rule-08: error on 08 only, exit 1
      RULE-08 scripts/fixtures/rule-08/content/days/day-02.md 13 quiz id "fx-d01-q1" is already used by scripts/fixtures/rule-08/content/days/day-01.md
      validate: 1 ledger rows, 2 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-08-review.md
PASS  rule-09: WARN on 09 only, exit 0
      WARN RULE-09 scripts/fixtures/rule-09/content/ledger/good-2000.yaml 9 good-2000: access is UNVERIFIED
      validate: 1 ledger rows, 1 days, 0 cards; 0 errors, 1 warning; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-09-review.md
PASS  rule-09 --strict: error on 09 only, exit 1
      RULE-09 scripts/fixtures/rule-09/content/ledger/good-2000.yaml 9 good-2000: access is UNVERIFIED
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-09-strict-review.md (strict)
PASS  rule-10: error on 10 only, exit 1
      RULE-10 scripts/fixtures/rule-10/content/days/day-01.md 29 "9.0%" has no [[key]] citation in its paragraph
      validate: 1 ledger rows, 1 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-10-review.md
PASS  rule-10-card: error on 10 only, exit 1
      RULE-10 scripts/fixtures/rule-10-card/content/cards/card-hypotension.md 10 "65 mmHg" has no [[key]] citation in its paragraph
      validate: 1 ledger rows, 1 days, 1 cards; 1 error, 0 warnings; 1 review item -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-10-card-review.md
PASS  rule-11: error on 11 only, exit 1
      RULE-11 scripts/fixtures/rule-11/content/days/day-01.md 13 "all/none of the above" is not a permitted option
      validate: 1 ledger rows, 0 days, 0 cards; 1 error, 0 warnings; 0 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-11-review.md
PASS  rule-12: error on 12 only, exit 1
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 33 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 37 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 41 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      RULE-12 scripts/fixtures/rule-12/content/days/day-01.md 45 placeholder [NUMBER NEEDED: fixture value] in content with draft: false
      validate: 1 ledger rows, 1 days, 0 cards; 4 errors, 0 warnings; 4 review items -> ../../../../../tmp/pacu-selftest-rmFhDn/rule-12-review.md
selftest: all fixtures behaved
```

## npm run validate
```

> pacu-curriculum@0.0.1 validate
> node scripts/validate.mjs

WARN RULE-09 src/content/ledger/agarwala-2019.yaml 12 agarwala-2019: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/apfel-1999.yaml 7 apfel-1999: neither doi nor pmid
WARN RULE-09 src/content/ledger/apfel-1999.yaml 12 apfel-1999: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/apfel-2004.yaml 12 apfel-2004: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/chung-2016-sasm.yaml 7 chung-2016-sasm: neither doi nor pmid
WARN RULE-09 src/content/ledger/driver-2021.yaml 17 driver-2021: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/fortier-2015.yaml 7 fortier-2015: neither doi nor pmid
WARN RULE-09 src/content/ledger/fortier-2015.yaml 12 fortier-2015: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/fu-2004.yaml 20 fu-2004: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/mcevoy-2019.yaml 7 mcevoy-2019: neither doi nor pmid
WARN RULE-05 src/content/ledger/olsson-1984.yaml 7 olsson-1984: neither doi nor pmid
WARN RULE-09 src/content/ledger/olsson-1984.yaml 12 olsson-1984: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/salzwedel-2013.yaml 7 salzwedel-2013: neither doi nor pmid
WARN RULE-09 src/content/ledger/salzwedel-2013.yaml 12 salzwedel-2013: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/salzwedel-2016.yaml 7 salzwedel-2016: neither doi nor pmid
WARN RULE-09 src/content/ledger/salzwedel-2016.yaml 12 salzwedel-2016: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/sessler-2019-d6.yaml 7 sessler-2019-d6: neither doi nor pmid
WARN RULE-05 src/content/ledger/sessler-2019.yaml 7 sessler-2019: neither doi nor pmid
WARN RULE-05 src/content/ledger/sun-2015.yaml 7 sun-2015: neither doi nor pmid
WARN RULE-09 src/content/ledger/sun-2015.yaml 12 sun-2015: access unverified (docs/ledger-debt.md §1)
validate: 53 ledger rows, 1 days, 0 cards; 0 errors, 20 warnings; 1 review item -> docs/content-review.md
```

## npm run build
```

> pacu-curriculum@0.0.1 build
> npm run validate && astro build


> pacu-curriculum@0.0.1 validate
> node scripts/validate.mjs

WARN RULE-09 src/content/ledger/agarwala-2019.yaml 12 agarwala-2019: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/apfel-1999.yaml 7 apfel-1999: neither doi nor pmid
WARN RULE-09 src/content/ledger/apfel-1999.yaml 12 apfel-1999: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/apfel-2004.yaml 12 apfel-2004: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/chung-2016-sasm.yaml 7 chung-2016-sasm: neither doi nor pmid
WARN RULE-09 src/content/ledger/driver-2021.yaml 17 driver-2021: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/fortier-2015.yaml 7 fortier-2015: neither doi nor pmid
WARN RULE-09 src/content/ledger/fortier-2015.yaml 12 fortier-2015: access unverified (docs/ledger-debt.md §1)
WARN RULE-09 src/content/ledger/fu-2004.yaml 20 fu-2004: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/mcevoy-2019.yaml 7 mcevoy-2019: neither doi nor pmid
WARN RULE-05 src/content/ledger/olsson-1984.yaml 7 olsson-1984: neither doi nor pmid
WARN RULE-09 src/content/ledger/olsson-1984.yaml 12 olsson-1984: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/salzwedel-2013.yaml 7 salzwedel-2013: neither doi nor pmid
WARN RULE-09 src/content/ledger/salzwedel-2013.yaml 12 salzwedel-2013: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/salzwedel-2016.yaml 7 salzwedel-2016: neither doi nor pmid
WARN RULE-09 src/content/ledger/salzwedel-2016.yaml 12 salzwedel-2016: access unverified (docs/ledger-debt.md §1)
WARN RULE-05 src/content/ledger/sessler-2019-d6.yaml 7 sessler-2019-d6: neither doi nor pmid
WARN RULE-05 src/content/ledger/sessler-2019.yaml 7 sessler-2019: neither doi nor pmid
WARN RULE-05 src/content/ledger/sun-2015.yaml 7 sun-2015: neither doi nor pmid
WARN RULE-09 src/content/ledger/sun-2015.yaml 12 sun-2015: access unverified (docs/ledger-debt.md §1)
validate: 53 ledger rows, 1 days, 0 cards; 0 errors, 20 warnings; 1 review item -> docs/content-review.md
[2m16:09:14[22m [34m[content][39m Syncing content
[33m[1m16:09:14[22m [WARN] [glob-loader][39m No files found matching "card-*.md" in directory "src/content/cards"
[2m16:09:15[22m [34m[content][39m Synced content
[2m16:09:15[22m [34m[types][39m Generated [2m626ms[22m
[2m16:09:15[22m [34m[build][39m output: [34m"static"[39m
[2m16:09:15[22m [34m[build][39m mode: [34m"static"[39m
[2m16:09:15[22m [34m[build][39m directory: [34m/home/runner/work/PACU/PACU/dist/[39m
[2m16:09:15[22m [34m[build][39m Collecting build info...
[2m16:09:15[22m [34m[build][39m [32m✓ Completed in 639ms.[39m
[2m16:09:15[22m [34m[build][39m Building static entrypoints...
[2m16:09:16[22m [34m[vite][39m [32m✓ built in 1.10s[39m
[2m16:09:16[22m [34m[build][39m [32m✓ Completed in 1.14s.[39m

[42m[30m building client (vite) [39m[49m
[2m16:09:16[22m [34m[vite][39m transforming...
[2m16:09:16[22m [34m[vite][39m [32m✓[39m 1 modules transformed.
[2m16:09:16[22m [34m[vite][39m rendering chunks...
[2m16:09:16[22m [34m[vite][39m [32m✓ built in 18ms[39m

[42m[30m generating static routes [39m[49m
[2m16:09:16[22m [32m▶[39m src/pages/c/[id].astro
The collection "cards" does not exist or is empty. Please check your content config file for errors.
[2m16:09:16[22m [32m▶[39m src/pages/d/[id].astro
[2m16:09:16[22m   [34m└─[39m [2m/d/day-03/index.html[22m [2m(+11ms)[22m 
[2m16:09:16[22m [32m▶[39m src/pages/index.astro
[2m16:09:16[22m   [34m└─[39m [2m/index.html[22mThe collection "cards" does not exist or is empty. Please check your content config file for errors.
 [2m(+4ms)[22m 
[2m16:09:16[22m [32m✓ Completed in 37ms.
[39m
[2m16:09:16[22m [34m[build][39m 2 page(s) built in [1m1.84s[22m
[2m16:09:16[22m [34m[build][39m [1mComplete![22m
```

## Day 3 render markers (dist/d/day-03/index.html)
```
class="draft-banner"         1
chip mode                    1
Consensus only               1
id="src-fu-2004"             1
href="#src-fu-2004"          9
https://doi.org/             1
badge paywalled              1
id="quiz"                    1
Progress is not saved        2
data-quiz-item               5
<h2 id="check-yourself"      1
NUMBER NEEDED                1
```

## Result: GREEN
