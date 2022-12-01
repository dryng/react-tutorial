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

### tips
- page is still just a component
- use <Link> (from 'react-router-dom') to keep as SPA
- css modules. allow you to style components without the styling affecting any other components. <name>.module.css. In the <name>.js you import classes (any name) from './<name>.module.css'. Classes is now an object with keys being the css names so can use the object to style. Ex. <div class={classes.div1Styling}>...
- state. what is currently going on as to know what to render. {useState} -> array of [currentState, func to change state]
- lists of data to list of jsx elements. {DUMMY_DATA.map((meetup) => { return <li key={meetup.id}>{meetup.title </li> })}. React can render a list of elements. list items (even if custom comps) need a key prop (built in) (unique id) for effiency.
 - props.children is the content passed between the opening and closing tags. Used to wrap comps in other comps
 - submiting forms -> need to stop default behavior (look at NewMeetupForm)
 - ref. connect directly to dom elements using {useRef} from 'react'. Can then say grab text from a form using onSubmit function.
- send http req. can just use fetch(url, {method: 'POST'})
- useHistory. expose browser history to move to new pages, change what the backbutton goes to. now its useNavigate. replace history.push('/path') with navigate('/path'). change history.replace('/path') with navigate('/path', { replace: true })
- async calls / fetching data. React funcs have to be sync so use state to switch between loading and loaded. When loading return a spinning wheel or something and when loaded update with the data. In fetch promise in final .then() state the state of loading to false. on state change the comp is re-render so thats why you'll then see the data. useState can take an [] and then set that [] doesnt have to be t/f/.
- useEffect. used when only want to do something conditionally. useEffect(() => {}, []). runs when value in [] changes. so if empty will run first time and then not again but theres nothing. if there was a bool whenever it flips it'll re-run
- updating state if you depend on a previous version of the state. setState((prevState) => {
                                                                                return prevState.concat(newState);
                                                                            }) .  its a func rather than just setting the new value. This is because updating state is scheduled so you could miss a change in theory
- context. If you need different components to be aware of some thing and be able to change something. ex favorites (header, fav page, meetup on meetups page). You wrap a useContext object around all the other components by doing useContext onj.provider {prop.children} .. Can wrap around whole app in index.js if need be.
