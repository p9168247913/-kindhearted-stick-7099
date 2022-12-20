# -kindhearted-stick-7099
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React Axios with API

React Client with Axios to make CRUD requests to Rest API in that:

React Axios GET request: get all Tutorials, get Tutorial by Id, find Tutorial by title
React Axios POST request: create new Tutorial
React Axios PUT request: update an existing Tutorial
React Axios DELETE request: delete a Tutorial, delete all Tutorials


<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

# [React Icons](https://react-icons.github.io/react-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easily with `react-icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation (for standard modern project)

```bash
yarn add react-icons
# or
npm install react-icons --save
```

example usage

```jsx
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  );
}
```

[View the documentation](https://react-icons.github.io/react-icons) for further usage examples and how to use icons from other packages. _NOTE_: each Icon package has it's own subfolder under `react-icons` you import from.

For example, to use an icon from **Material Design**, your import would be: `import { ICON_NAME } from 'react-icons/md';`

## Installation (for meteorjs, gatsbyjs, etc)

If your project grows in size, this option is available.
This method has the trade-off that it takes a long time to install the package.

```bash
yarn add @react-icons/all-files
# or
npm install @react-icons/all-files --save
```

example usage

```jsx
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function Question() {
  return (
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  );
}
```

## Icons

| Icon Library                                                            | License                                                                                           | Version                                  | Count |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----: |
| [Circum Icons](https://circumicons.com/)                                | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)                 | a2924cb1ee37b9fa39ef023a36f1c884b3492e9b |   285 |
| [Font Awesome](https://fontawesome.com/)                                | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 5.15.4                                   |  1612 |
| [Ionicons 4](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 4.6.3                                    |   696 |
| [Ionicons 5](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 5.5.0                                    |  1332 |
| [Material Design icons](http://google.github.io/material-design-icons/) | [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | 4.0.0-12-g63c5cb3060                     |  3650 |
| [Typicons](http://s-ings.com/typicons/)                                 | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                                   | 2.1.2                                    |   336 |
| [Github Octicons icons](https://octicons.github.com/)                   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                                     | 8.5.0                                    |   184 |
| [Feather](https://feathericons.com/)                                    | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                                | 4.28.0                                   |   286 |
| [Game Icons](https://game-icons.net/)                                   | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                         | 12920d6565588f0512542a3cb0cdfd36a497f910 |  4040 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/)           | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                         | 2.0.12                                   |   219 |
| [Devicons](https://vorillaz.github.io/devicons/)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.8.0                                    |   192 |
| [Ant Design Icons](https://github.com/ant-design/ant-design-icons)      | [MIT](https://opensource.org/licenses/MIT)                                                        | 4.2.1                                    |   789 |
| [Bootstrap Icons](https://github.com/twbs/icons)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.5.0                                    |  1846 |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)                 | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 2.5.0                                    |  2271 |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons)          | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.2                                    |   329 |
| [Grommet-Icons](https://github.com/grommet/grommet-icons)               | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 4.6.2                                    |   615 |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.4                                    |   460 |
| [Heroicons 2](https://github.com/tailwindlabs/heroicons)                | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.0.8                                    |   530 |
| [Simple Icons](https://simpleicons.org/)                                | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)                           | 5.16.0                                   |  2024 |
| [Simple Line Icons](https://thesabbir.github.io/simple-line-icons/)     | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.5.5                                    |   189 |
| [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)                | [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)             | d006795ede82361e1bac1ee76f215cf1dc51e4ca |   491 |
| [BoxIcons](https://github.com/atisawd/boxicons)                         | [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)                      | 2.0.9                                    |   757 |
| [css.gg](https://github.com/astrit/css.gg)                              | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.0.0                                    |   704 |
| [VS Code Icons](https://github.com/microsoft/vscode-codicons)           | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                                         | 0.0.23                                   |   383 |
| [Tabler Icons](https://github.com/tabler/tabler-icons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.68.0                                   |  1978 |
| [Themify Icons](https://github.com/lykmapipo/themify-icons)             | [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)    | v0.1.2                                   |   352 |
| [Radix Icons](https://icons.radix-ui.com)                               | [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)                                      | @radix-ui/react-icons@1.0.3-30-g237cd76  |   318 |

You can add more icons by submitting pull requests or creating issues.

## Configuration

You can configure react-icons props using [React Context API](https://reactjs.org/docs/context.html).

_Requires **React 16.3** or higher._

```jsx
import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>;
```

| Key         | Default               | Notes                              |
| ----------- | --------------------- | ---------------------------------- |
| `color`     | `undefined` (inherit) |                                    |
| `size`      | `1em`                 |                                    |
| `className` | `undefined`           |                                    |
| `style`     | `undefined`           | Can overwrite size and color       |
| `attr`      | `undefined`           | Overwritten by other attributes    |
| `title`     | `undefined`           | Icon description for accessibility |

## Migrating from version 2 -> 3

### Change import style

Import path has changed. You need to rewrite from the old style.

```jsx
// OLD IMPORT STYLE
import FaBeer from "react-icons/lib/fa/beer";

function Question() {
  return (
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  );
}
```

```jsx
// NEW IMPORT STYLE
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      {" "}
      Lets go for a <FaBeer />?{" "}
    </h3>
  );
}
```


### Adjustment CSS

From version 3, `vertical-align: middle` is not automatically given. Please use IconContext to specify className or specify an inline style.

#### Global Inline Styling

```tsx
<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
```

#### Global `className` Styling

Component

```tsx
<IconContext.Provider value={{ className: 'react-icons' }}>
```

CSS

```css
.react-icons {
  vertical-align: middle;
}
```

### TypeScript native support

Dependencies on `@types/react-icons` can be deleted

#### NPM

```bash
npm remove @types/react-icon/fa

### Development

```bash
yarn
yarn submodule  # fetch icon sources
cd packages/react-icons
yarn build
```

### Preview

The preview site is the [`react-icons`](https://react-icons.github.io/react-icons) website, built in [NextJS](https://nextjs.org/).

```bash
cd packages/react-icons
yarn build

cd ../preview
yarn start
```

### Demo

The demo is a [Create React App](https://create-react-app.dev/) boilerplate with `react-icons` added as a dependency for easy testing.

```bash
cd packages/react-icons
yarn build


# React-Bootstrap

> **[Bootstrap 5][bootstrap]** components built with [React][react].

[![GitHub Actions CI status][gh-actions-badge]][gh-actions]
[![Travis CI Build status][travis-badge]][travis]
[![npm][npm-badge]][npm]
[![Codecov][codecov-badge]][codecov]
[![Discord][discord-badge]][discord]
[![Netlify][netlify-badge]][netlify]

## Bootstrap compatibility

React-Bootstrap is compatible with various versions of Bootstrap.  As such, you need to ensure you are using the correct combination of versions.  

See the below table on which version of React-Bootstrap you should be using in your project.

| Bootstrap Version | React-Bootstrap Version | Documentation |
| ------------- |:-------------:| -----:|
| v5.x | 2.x | [Link][v5-documentation] |
| v4.x | 1.x | [Link][v4-documentation] |
| v3.x | 0.33.x (not maintained) | [Link][v3-documentation] |

## Migrating from previous versions

### Bootstrap 4 to Bootstrap 5

If you would like to update React-Bootstrap within an existing project to use Bootstrap 5, please read our docs for **[migrating to React-Bootstrap V2][v5-migration]**.

### Bootstrap 3 to Bootstrap 4

If you would like to update React-Bootstrap within an existing project to use Bootstrap 4, please read our docs for **[migrating to React-Bootstrap V1][v4-migration]**.

## Related modules

- [react-router-bootstrap][react-router-bootstrap] – Integration with [React Router][react-router]
- [Awesome React Bootstrap Components][awesome-react-bootstrap-components] - Additional components like off-canvas navbar, switch and sliders.

## Local setup

Yarn is our package manager of choice here. Check out setup
instructions [here](https://yarnpkg.com/en/docs/install) if you don't have it installed already.
After that you can run `yarn run bootstrap` to install all the needed dependencies.

From there you can:

- Run the tests once with `yarn test` (Or run them in watch mode with `yarn run tdd`).
- Start a local copy of the docs site with `yarn start`
- Or build a local copy of the library with `yarn run build`
