# tsconfig.json

## Installation

```
npm install @jshawl/tsconfig
```

or

```
curl -OL https://unpkg.com/@jshawl/tsconfig/tsconfig.json
```

## Background

it takes too long to add a `tsconfig.json` file to a new project.

google -> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

shows

```
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ]
}
```

which is a terrible example because my brand new uncluttered project has none of those files and none of the shortcuts to just get started.

The second example is:

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

but... why would i want an `outFile` with everything jammed in a single file? Why would it be two directories up?

This project is an attempt to simplify the addition of a sane `tsconfig.json` file to a new TypeScript project.
