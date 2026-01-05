
### Setup
- Nx Workspace created using npx create-nx-workspace@latest main.
- Added `.nvmrc`

To use the `.nvmrc`:
- cd into this directory
- Run `nvm use`
- nvm should now use the node version mentioned in `.nvmrc`.

Created using:

| | | |
| ---- | ---- | --- |
| Node | v24.11.0 | |
| Nx | v22.1.1 | |
| Angular | v20.3.13 | @angular/core @angular/common @angular/forms @angular/router @angular/platform-browser @angular/platform-browser-dynamic |
| Angular Compiler | v20.3.13 | @angular/compiler @angular/compiler-cli |
| Angular CLI | v20.3.11 | @angular/cli @angular/build |
| RxJS | v7.8.2 | |
| TypeScript | v5.9.3 | |
| Jest | v29.7.0 | |
| Tslib | v2.8.1 | |
| | |

### Creating a nx angular application
- Use Nx Console extension to generate a nx application.
- Alternatively the below command can be run with pre-configured options to achieve the same using `@nx/angular` plugin:
`nx g @nx/angular:application --directory=apps/proj1 --name=proj1 --prefix=p1`
- Run tests using jest

> Create a angular application in `gfe`
>
> `npm x -- nx g @nx/angular:application --directory=apps/gfe/billing-history --name=billing-history --linter=none --prefix=bh --dry-run`

| Nx Console Options | Identifier | IsModified |
| --- | --- | --- |
| bundler | esbuild | false |
| directory | apps/gfe/billing-history | true |
| name | billing-history | true |
| routing | true | false |
| standalone | true | false |
| linter | none | true |
| prefix | bh | true |
| strict | true | false |
| skipTests | false | false |
| e2eTestRunner | none | false |
| unitTestRunner | jest | false |
| viewEncapsulation | -- | false |

### Unit Tests
- Use `testMatch`, `findRelatedTests` options for `test` target in `project.json` to test specific test files using regex, a comma-separated list respectively.
- See https://jestjs.io/docs/configuration#testmatch-arraystring
- Refer `project.json` for `sample` project

> [!TIP]
> [Debug Tests using VSCode Debug Session](https://stackoverflow.com/questions/33247602/how-do-you-debug-jest-tests)
> Clear the cache before running tests (`nx reset`)
> Test command can also be run in watch node when debugging - `nx test <project> --watch`


## Run tasks

To run the dev server for your app, use:

```sh
nx serve main
```

To create a production bundle:

```sh
nx build main
```

To see all available targets to run for a project, run:

```sh
nx show project main
```

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

#### Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
