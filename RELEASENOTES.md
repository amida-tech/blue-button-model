# blue-button-model.js Release Notes

# v1.10.1 - December 20, 2021

- Added:
  - medication supply instructions
  - medication information to supply and dispense sections
  - instructions and to plan of care
  - subType field to plan of care entries
  - support PQ, CD, and ST xsi:types for values on procedure observations
  - schema for:
    - reason for referral
    - hospital discharge (instructions & medications)

- Updated result interpretation to coded entry type
- Security fixes to dev dependencies.

# v.1.5.0 - June 12, 2015
- confidentiality explicitly added to meta
- demographics race and ethnicity are separated
- add problem.problem.severity
- performer and performers are now consistent as object or array

# v.1.4.0 - February 27, 2015
- problem.status is fixed

# v.1.3.0 - December 12, 2014
- Seperated from blue-button repository.
- Updated to use z-schema version 3.1.
- Added API method to validate individual components (sections, entries, shared components).
- Added API method to access the schemas themselves.
- Full set of unit tests are added.
