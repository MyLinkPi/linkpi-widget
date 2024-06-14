# @mylinkpi/widget-cli

A new CLI generated with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@mylinkpi/cli-demo.svg)](https://npmjs.org/package/@mylinkpi/cli-demo)
[![Downloads/week](https://img.shields.io/npm/dw/@mylinkpi/cli-demo.svg)](https://npmjs.org/package/@mylinkpi/cli-demo)

<!-- toc -->
* [@mylinkpi/widget-cli](#mylinkpiwidget-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @mylinkpi/widget-cli
$ widget-cli COMMAND
running command...
$ widget-cli (--version)
@mylinkpi/widget-cli/1.0.0-beta.9 darwin-arm64 node-v18.18.2
$ widget-cli --help [COMMAND]
USAGE
  $ widget-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`widget-cli build`](#widget-cli-build)
* [`widget-cli dev`](#widget-cli-dev)
* [`widget-cli hello PERSON`](#widget-cli-hello-person)
* [`widget-cli hello world`](#widget-cli-hello-world)
* [`widget-cli help [COMMAND]`](#widget-cli-help-command)
* [`widget-cli info`](#widget-cli-info)
* [`widget-cli plugins`](#widget-cli-plugins)
* [`widget-cli plugins add PLUGIN`](#widget-cli-plugins-add-plugin)
* [`widget-cli plugins:inspect PLUGIN...`](#widget-cli-pluginsinspect-plugin)
* [`widget-cli plugins install PLUGIN`](#widget-cli-plugins-install-plugin)
* [`widget-cli plugins link PATH`](#widget-cli-plugins-link-path)
* [`widget-cli plugins remove [PLUGIN]`](#widget-cli-plugins-remove-plugin)
* [`widget-cli plugins reset`](#widget-cli-plugins-reset)
* [`widget-cli plugins uninstall [PLUGIN]`](#widget-cli-plugins-uninstall-plugin)
* [`widget-cli plugins unlink [PLUGIN]`](#widget-cli-plugins-unlink-plugin)
* [`widget-cli plugins update`](#widget-cli-plugins-update)
* [`widget-cli publish`](#widget-cli-publish)
* [`widget-cli publish-dev`](#widget-cli-publish-dev)

## `widget-cli build`

Build your widget

```
USAGE
  $ widget-cli build [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Build your widget

EXAMPLES
  $ widget-cli build
```

_See code: [src/commands/build.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/build.ts)_

## `widget-cli dev`

Start the Vite development server using in-memory configuration

```
USAGE
  $ widget-cli dev

DESCRIPTION
  Start the Vite development server using in-memory configuration
```

_See code: [src/commands/dev/index.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/dev/index.ts)_

## `widget-cli hello PERSON`

Say hello

```
USAGE
  $ widget-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ widget-cli hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/hello/index.ts)_

## `widget-cli hello world`

Say hello world

```
USAGE
  $ widget-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ widget-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/hello/world.ts)_

## `widget-cli help [COMMAND]`

Display help for widget-cli.

```
USAGE
  $ widget-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for widget-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.0/src/commands/help.ts)_

## `widget-cli info`

print the widget info

```
USAGE
  $ widget-cli info [-d]

FLAGS
  -d, --dev

DESCRIPTION
  print the widget info

EXAMPLES
  $ widget-cli info
```

_See code: [src/commands/info.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/info.ts)_

## `widget-cli plugins`

List installed plugins.

```
USAGE
  $ widget-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ widget-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/index.ts)_

## `widget-cli plugins add PLUGIN`

Installs a plugin into widget-cli.

```
USAGE
  $ widget-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into widget-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the WIDGET_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the WIDGET_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ widget-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ widget-cli plugins add myplugin

  Install a plugin from a github url.

    $ widget-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ widget-cli plugins add someuser/someplugin
```

## `widget-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ widget-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ widget-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/inspect.ts)_

## `widget-cli plugins install PLUGIN`

Installs a plugin into widget-cli.

```
USAGE
  $ widget-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into widget-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the WIDGET_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the WIDGET_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ widget-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ widget-cli plugins install myplugin

  Install a plugin from a github url.

    $ widget-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ widget-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/install.ts)_

## `widget-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ widget-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ widget-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/link.ts)_

## `widget-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ widget-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ widget-cli plugins unlink
  $ widget-cli plugins remove

EXAMPLES
  $ widget-cli plugins remove myplugin
```

## `widget-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ widget-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/reset.ts)_

## `widget-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ widget-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ widget-cli plugins unlink
  $ widget-cli plugins remove

EXAMPLES
  $ widget-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/uninstall.ts)_

## `widget-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ widget-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ widget-cli plugins unlink
  $ widget-cli plugins remove

EXAMPLES
  $ widget-cli plugins unlink myplugin
```

## `widget-cli plugins update`

Update installed plugins.

```
USAGE
  $ widget-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.2.3/src/commands/plugins/update.ts)_

## `widget-cli publish`

Build and publish your widget

```
USAGE
  $ widget-cli publish [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Build and publish your widget

EXAMPLES
  $ widget-cli publish
```

_See code: [src/commands/publish.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/publish.ts)_

## `widget-cli publish-dev`

Build and publish-dev your widget

```
USAGE
  $ widget-cli publish-dev [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Build and publish-dev your widget

EXAMPLES
  $ widget-cli publish-dev
```

_See code: [src/commands/publish-dev.ts](https://github.com/packages/widget-cli/blob/v1.0.0-beta.9/src/commands/publish-dev.ts)_
<!-- commandsstop -->
