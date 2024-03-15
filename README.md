# tempmail-generator

A temp mail generator, that is able to receive real emails, 
Header Section (Full Width)

Position: Top of the webpage
Size: Full width of the viewport
Include website logo and navigation menu items (Home, About, FAQ, Contact)
Main Content Section (Full Width)

Position: Below the header
Size: Full width of the viewport
Contains the primary content of the webpage
Generate Email Button (Centered)

Position: Center of the main content section
Size: Width - 200px, Height - 50px
Button to generate a new temporary email address
Temporary Email Display Box (Centered)

Position: Below the generate email button
Size: Width - 400px, Height - Auto (based on content)
Box to display the generated temporary email address
Copy Button for Email Address (Right Aligned within Display Box)

Position: Right side of the temporary email display box
Size: Width - 50px, Height - 30px
Button to copy the generated email address to the clipboard
Inbox Section (Centered)

Position: Below the temporary email display box
Size: Width - 80%, Height - Auto (based on content)
Section to display received emails for the temporary email address
Email Item Container (Left Aligned within Inbox Section)

Position: Left side of the inbox section
Size: Width - 100%, Height - Auto (based on content)
Container for each received email item
Email Subject (Full Width within Email Item Container)

Position: Top of each email item container
Size: Full width of the container
Display the subject line of the received email
Email Content (Full Width within Email Item Container)

Position: Below the email subject within each email item container
Size: Full width of the container
Display the content/body of the received email
Footer Section (Full Width)

Position: Bottom of the webpage
Size: Full width of the viewport
Include copyright information and links to terms of service and privacy policy
Once you've designed the layout, you'll need to implement the functionality:

Backend Server Setup

Choose a server-side language and framework (e.g., Node.js with Express)
Set up routes for generating temporary email addresses and fetching received emails
Implement functions for generating random email addresses and storing/retrieving emails
Frontend Development

Write HTML/CSS code based on the designed layout
Use JavaScript for dynamic interactions such as copying email addresses and displaying received emails
Ensure responsive design for various screen sizes
Integration

Connect frontend and backend components to ensure seamless communication

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tempmail-generator.git
cd tempmail-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
