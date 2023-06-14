### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

The purpose of React Router is to allow React to serve components to the correct URL in a single page application 

- What is a single page application?

A single page application is an application where the pages are not served server side but served on one page and is re written based on the information passed into it. 

- What are some differences between client side and server side routing?

Server side routing will display a whole new web page to the client but client side will just download information from the web and re write the page accordingly. Because of this, client side routing will only make one request for the document and the other requests will just be data or different renders of components. Another difference is the amount of data being called from the server. Server side routing will be requesting everything from the document on each request and client side will just be the data needed to render the appropriate components.

- What are two ways of handling redirects with React Router? When would you use each?

The two ways of handling redirects (using react router v5) are using the Redirect component and using push to the history object. The difference is that the Redirect component will replace the route in the history stack and will not allow the user to use the back button in order to go back to the previous page. pushing to the history object will add the route into the history and will allow the user to go back to said page.

- What are two different ways to handle page-not-found user experiences using React Router? 

Two different ways to handle page not found in React Router is to either render out a 404 page to let the user know that the route doesnt exist, or to trigger a Redirect in order to never allow the user to see that the route isnt there and to immediately display a different page.

- How do you grab URL parameters from within a component using React Router?

You can grab URL parameters from within a component using the useParams() hook from react router.

- What is context in React? When would you use it?

react context is a way to manage data globally (or up to globally, the dev can decide how far it goes). I would use context when I want to send data to a component that needs data that the parent cannot send down or when the data needs to be drilled down through multiple levels in order to reduce code repeating.

- Describe some differences between class-based components and function
  components in React.

the main difference between class based and functional components is the hooks. Hooks take the place of many pieces of function logic within class based components and condenses them into single hooks.

- What are some of the problems that hooks were designed to solve?

Hooks were designed to solve code repating as well as being able to share pieces of logic between many components.