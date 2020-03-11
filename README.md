# d4sd-components

This is the component library for [D4SD](https://d4sd.org/)

It is an extension of Ant Design, so all non-overided components remain purely Ant Design components

To see/test our components, go to master branch and run `npm run storybook`

## How to publish components library

First, make your components in the `components` folder

Then, in `index.tsx` in the root folder, add a
```js
export { YourComponent } from "./components/YourComponent";
```
before the `export * from "antd"`

Then, running
```bash
npm run storybook
```
Will load the current code and show your components in `stories` on a locally hosted website that will eventually automatically open.


Then run the following to **prepare/build** the component library for publishing

```bash
npm run build
```

This essentially removes the old package and then runs webpack to pack our code into a library.

This will eventually open a website displaying the contents of the package just built and its size, you can quit this process anytime. The package contents should contain `index.js` and `main.css`.

After running the build, make sure to **commit** all changes and push them to the remote (GitHub) and then **update the package version**

```bash
npm version patch
```

Then we finally **publish** the library with

```bash
npm publish
```

Once published, make sure to run
```bash
npm install @d4sd/components
```

in whichever repository is using our components to update it.

## Development Workflow / Tips

The master branch should **always** be in sync with what is published. E.g, if you ran `npm run build`, the built package is the same as what is being hosted on npm.

With this in mind, make changes by branching off of master and test those changes using `npm run storybook`. Commit/push those changes to your branch and merge your branch into `master` once it is ready. After each merge, **make sure** to follow the publishing steps above.

