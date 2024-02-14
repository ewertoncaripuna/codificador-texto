# String Encoder/Decoder

This repository contains a JavaScript application for encoding and decoding strings using a custom mapping. The application allows users to encode text based on a predefined list of character replacements and decode previously encoded text back to its original form.

## Usage

To use the application, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Enter the text you want to encode/decode in the input field.
4. Click the respective "Encode" or "Decode" button to perform the desired operation.
5. The encoded/decoded text will be displayed in the output area.

## Features

- **String Encoding:** Encode text based on a custom list of character replacements.
- **String Decoding:** Decode previously encoded text back to its original form.
- **User Interface:** Simple and intuitive user interface for easy interaction.
- **Copy Functionality:** Easily copy the encoded/decoded text to the clipboard.
- **Feedback Messages:** Informative messages for successful encoding, decoding, and copying actions.

## How it Works

The application utilizes JavaScript functions to normalize input strings, perform character replacements according to the specified list, and display the results to the user. The encoding and decoding functions iterate through the input string, replacing characters based on the provided mapping.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Credits

- **Normalization Function**: The `normalizeString` function used in the application is sourced from [this Stack Overflow answer](https://stackoverflow.com/a/37511463).
