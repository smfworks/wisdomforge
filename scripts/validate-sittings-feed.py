#!/usr/bin/env python3
"""Validate public/sittings.json against Aiona's spec."""
import json, sys
from collections import Counter

with open("public/sittings.json") as f:
    d = json.load(f)

required_fields = ["title", "slug", "band", "subject", "ritual", "durationMin", "materials"]
errors = []

print(f"generated: {d['generated']}")
print(f"count (declared): {d['count']}")
print(f"sittings (actual): {len(d['sittings'])}")

if d["count"] != len(d["sittings"]):
    errors.append(f"count mismatch: declared {d['count']} vs actual {len(d['sittings'])}")

# Validate every sitting
for i, s in enumerate(d["sittings"]):
    for field in required_fields:
        if field not in s:
            errors.append(f"sitting[{i}] ({s.get('slug','?')}): missing required field '{field}'")
    if not s.get("slug"):
        errors.append(f"sitting[{i}]: empty slug")
    if not s.get("title"):
        errors.append(f"sitting[{i}] ({s.get('slug','?')}): empty title")

# Check for duplicate slug+band+subject (should be unique)
keys = [(s["band"], s["subject"], s["slug"]) for s in d["sittings"]]
dupes = [k for k, c in Counter(keys).items() if c > 1]
if dupes:
    errors.append(f"Duplicate sitting keys: {dupes[:5]}")

# Summary stats
bands = Counter(s["band"] for s in d["sittings"])
subjects = Counter(s["subject"] for s in d["sittings"])
rituals = Counter(s["ritual"] for s in d["sittings"])

print(f"\nPer band: {dict(sorted(bands.items()))}")
print(f"Per subject: {dict(sorted(subjects.items()))}")
print(f"Per ritual: {dict(sorted(rituals.items()))}")

# Show first entry fully
print(f"\nFirst sitting:")
print(json.dumps(d["sittings"][0], indent=2))

if errors:
    print(f"\n❌ {len(errors)} ERRORS:")
    for e in errors[:20]:
        print(f"  - {e}")
    sys.exit(1)
else:
    print(f"\n✅ All {len(d['sittings'])} sittings valid — all required fields present, no duplicates.")
    sys.exit(0)