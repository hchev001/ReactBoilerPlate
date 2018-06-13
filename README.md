# React Boilerplate Code
This repository will serve as the initial seed for various React projects and will evolve over time. I thank the following people for their articles and advice in creating this seed project: Shivek Khurana.

## App Structure
The project will use the following app structure as described by Shivek Khurana.

* **REACT-BOILERPLATE**: This is the root directory of the project, rename it to the project's name.
* **dist**: Here are stored all files that are produced by Webpack
* **public**: Root directory for public assets of the project
* **src**: Where you code.
* **src.pages**: Root level components, onses which are directly mounted on level 1 routes. (Ex. if you have a route called /login that mounts a Login component, then Login.js will be present in pages directory).
* **src.modules** handles your state (actions + reduces using ducks file structure)
* **src.components**: Houses shared components, like Button, Input etc.
* **src.utils**: have utilities like your api wrapper, date utils, string utils, etc.
* **config**: Where you store your environment variables like api endpoints. Don't commit this to git.
* **store**: Initializes the redux store.
* **index**: Registers the routes, and renders the app.

### Rules
All _components_ are **CamelCased**

The sub components of Login.js are present in a folder called login. This is the node that will helpt setup a repeating pattern.

All _nodes_ are **lowerCamelCased**

In the login folder, say there was a ForgotModal.js and it had sub components as well then inside the Login folder, there would be a node called ForgotModal which would house the subcomponents of the ForogtModal.js component.

All components required by a page go to it's node folder. All components required by more than one component, like a branded button, then it should be housed in the **src.components** folder.

Further information can be found at the following [link](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)

## Webpack Setup