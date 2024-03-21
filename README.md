HTML code:
Creates a web page structure that includes a text input field, two buttons (Generate Password and Copy), and links to external styles and scripts.


JavaScript code:
Declares variables for DOM elements: input field, "Generate password" button (genButton) and "Copy" button (copyButton).
Initializes variables to store lowercaseLetters, uppercaseLetters, numbers, and special characters (SpcSymbol).
Collects all symbols into one string (allSymbols), including lowercase and uppercase characters, numbers and special characters.
Adds a click event handler to the "Generate Password" button, which generates a random password from the symbols in allSymbols and displays it in the input field.
Adds a click event handler to the Copy button that copies the contents of the input field to the clipboard.
