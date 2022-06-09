# Project Assesment.

Used http-server NPM package to create local server.

## Http-server installation

```bash
  npm install http-server
```

## Local Server Initiation

```bash
  http-server -c-1
```

## Functionality

Included the latest version of React and Babel by adding CDN Links to existing HTML file.

```bash
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Used ReactDOM to render NewComponent into existing div element with id of "new", by using:

```bash
  ReactDOM.render(<NewComponent />, document.getElementById("new")).
```

NewComponent.js file, creates a new React component class that returns a custom form component. The form component renders three options that will decide which button will be disabled on the old component, once the form is submitted. Before disabling any buttons on the old component when the submit button is clicked, we iterate through all three buttons and enable them using:

```bash
  # variable "value" is the current button while iterating
  document.querySelector(`#old :nth-child(${value})`).disabled = false
```

That way we will only have a maximum of one button disabled at any given time. When a button is clicked on the old component, the buttonClicked function now passes the selected button text to a new element that uses the class "new_component_selected_button".
