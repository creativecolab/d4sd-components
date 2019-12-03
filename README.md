# d4sd-components

## STEPS TO PUBLISH COMPONENTS

First, make your components in the `components` folder, follow previous designs

Then, in `index.tsx` in the root folder, add a
```js
export { YourComponent } from "./components/YourComponent";
```
before the `export * from "antd"`

Then, running
```bash
npm run storybook
```
Will load the current library and show your components in "stories" on a locally hosted website that will eventually automatically open

```bash
npm run build
```

AFTER committing a change and running the build, do the following

```bash
npm version patch
```

This will update the package version so it is ready to publish. Then publish with

```bash
npm publish
```

Once published, make sure to run
```bash
npm install @d4sd/components
```

in whichever repository is using our components to update it.
