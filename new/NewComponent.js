"use strict";
const e = React.createElement;

class NewComponent extends React.Component {
  render() {
    return <Form />;
  }
}

const Form = () => {
  const all_buttons = [1, 2, 3];
  const [selectedButton, setSelectedButton] = React.useState("");
  const formSubmit = (event) => {
    event.preventDefault();

    ///check to see which buttons are already disabled...

    all_buttons.map((value, _) => {
      let currentButton = document.querySelector(`#old :nth-child(${value})`);
      let disabled = currentButton.disabled;
      /// if any buttons are disabled, set them to enabled
      if (disabled) {
        currentButton.disabled = false;
      }
      /////
      return;
    });
    ////////

    //select button thats going to be updated and disabled it
    const ButtonToUpdate = document.querySelector(
      `#old :nth-child(${selectedButton})`
    );
    ButtonToUpdate.disabled = true;
    ///
  };
  const onValueChange = (event) => {
    setSelectedButton(parseInt(event.target.value));
  };

  return (
    <>
      <div>
        <h5>
          Button currently selected :
          <span id="new_component_selected_button"></span>
        </h5>
        <h5>Select a button to disable</h5>
      </div>
      <form class="form" onSubmit={formSubmit}>
        {all_buttons.map((value, key) => {
          return (
            <div key={key} className="radio">
              <label>
                <input
                  type="radio"
                  value={value}
                  checked={selectedButton == value}
                  onChange={onValueChange}
                />
                {value == 1 && "One"}
                {value == 2 && "Two"}
                {value == 3 && "Three"}
              </label>
            </div>
          );
        })}
        <br />
        <button className="btn btn-default form-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
