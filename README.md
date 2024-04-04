![logo-vertical](https://github.com/KajananGit/Stock_Frontend/assets/92640386/9f5b6ba0-5a55-4ded-807f-0fdc30f5fd51)

</h1>

## Table of Contents
1. [Project Description](#project-description)
2. [Installation instructions](#installation-instructions)
3. [Usage](#usage)
4. [Contributing Instructions](#contributing-instructions)
5. [Credits and Acknowledgements](#credits-and-acknowledgements)
6. [Licences](#licences)


## Project Description
This project utilised Javascript, React, HTML and CSS to build a frontend for supermarket stock management database. 
This frontend builds on a backend API for a fictional warehouse which contains stock batches of particular items. Products in stock can be chosen and sorted into a list of ordered items, that is then added to an order placed by a supermarket.


![JavaScript](https://img.shields.io/badge/javascript-grey?logo=javascript)



### MVP
- Create a landing page with navigation routes.
- Create a navigation bar and display it on each page.
- Create a page for a creating a new order with ordered items.
- Create a page to display all orders.
- Functionality to create a new order that is stored in the database.
- Add delete functionality for an order on the display orders page.
- Add CSS styling to the pages.


### Extensions
- Add a button that generates warehouse themed jokes.
- Add an audio player to the page with audio controls.
- Add functionality to edit the order status to be updated to be in progress, out for delivery, delivered.
- Add ability to edit orders.
- Add an expand button to see full order details on the current orders page.

### Wireframe 
![diagram024-04-04-1017](https://github.com/KajananGit/Stock_Frontend/assets/156658708/c2e6c41d-4128-433d-a73f-e99a491e86fe)




### Prop Diagram
![prop-diagram](https://github.com/KajananGit/Stock_Frontend/assets/149251586/b04cd8aa-c3ad-4e5c-9dde-4313cf65b462)



## Installation instructions
- In the terminal, navigate to the directory you want to copy the repository into. \
- Run the command ```git clone git@github.com:Marv3llous/Backend_API.git```
- Run the command ```git pull``` to ensure you have the latest version.
- Open the project in the preferred IDE such as IntelliJ.
- In the terminal, create the database called inventory_db by running the command ```createdb inventory_db```.
- Run the BackendProject file.

<hr>
  
- In the terminal, navigate to the directory you want to copy the repository into. \
- Run the command ```git clone git@github.com:KajananGit/Stock_Frontend.git```
- Run the command ```git pull``` to ensure you have the latest version.
- Open the project in the preferred IDE such as VSCode.
- Run the command ```npm i``` in the terminal.
- Now the backend API is running, you can run the frontend application by entering the command ```npm start```in the terminal.


## Usage
**Home Page:**
- Acts as a Welcoming Screen. Use buttons to navigate to other pages such as the Current Orders Page & New Orders Page.
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/e335f629-18d7-426e-afe1-a7680fafefe0)


**Current Orders Page:** 
- Displays all the current orders.
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/ee92b6dc-01cb-43fb-a2a0-cdeea5ac5bac)

- Can search orders based on the client (supermarket) that has placed an order.
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/95f0a394-5f05-4baf-ad19-740508246294)

- Can sort orders based on the order status.
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/497d4afa-a6eb-4fb6-8da0-1716c1481d60)

- Can view more details about an order when clicking on the 'More' button.
   
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/0077cf57-8505-4f73-86fe-15020c703775)
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/b5ecdf55-f672-4964-9c7f-f4cdf0c09e09)

- Can delete and order by clicking on the 'Delete' button.
   
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/f0166fe8-ea8e-496d-a89c-db809c363279)
![image](https://github.com/KajananGit/Stock_Frontend/assets/100879327/f647fbc3-7931-40b7-89ee-ad71e7bcdabb)

- Can update the status of an order by selecting a new status from the drop-down list.
   
![Screenshot 2024-04-04 at 11 59 23](https://github.com/KajananGit/Stock_Frontend/assets/100879327/b42bc4c3-017e-4395-83b7-b1d717090823)
![Screenshot 2024-04-04 at 12 00 03](https://github.com/KajananGit/Stock_Frontend/assets/100879327/aca90922-ca8c-494d-83c6-5e1ffe6eb27f)


**New Orders Page:**
- Can select a supermarket from the dropdown bar and start an order.
<img width="749" alt="Screenshot 2024-04-04 at 13 51 21" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/5306f754-bbd3-4cfa-a15a-45ad5ae18195">

- Once a store is selected and the button is submitted, the item form is displayed and you can add items, choose quantity and add them to your order.
<img width="721" alt="Screenshot 2024-04-04 at 13 51 38" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/374d0a1e-f3f5-4813-b8bd-75271e02211d">

- Once an order is placed you get an alert to confirm the order went through.
<img width="442" alt="Screenshot 2024-04-04 at 13 51 51" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/d7d403ee-a2ee-4b1f-99c0-5b0a4591e982">

**Extensions:**
- Can click the box in the header to generate warehouse themed jokes.
<img width="111" alt="Screenshot 2024-04-04 at 14 00 28" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/f1820297-9f6b-49ad-b848-0a84d027e4dd">

<img width="384" alt="Screenshot 2024-04-04 at 14 00 38" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/87535df9-3a2b-4b0b-9e4c-1ca277615e05">

   
- Can use the audio player to play music.
<img width="307" alt="Screenshot 2024-04-04 at 14 00 52" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/525f2de4-0476-4170-ab7d-b1425b8e9835">


- Clickable links in the footer.
<img width="576" alt="Screenshot 2024-04-04 at 14 00 58" src="https://github.com/KajananGit/Stock_Frontend/assets/156658708/15a4f83e-0e67-428f-b1ec-335f2e0eff1c">

## Contributing Instructions
Find below our contributing guidelines. By following these guidelines, you'll help us to maintain a high quality codebase and make the review process smoother for everyone.

**1. Fork the Repository:** Create a fork of the Stock_Frontend repository on GitHub.

**2. Create a Branch:** Clone the forked repository to your local machine & create a new branch for your contribution.

**3.Make Changes:** Make your changes to the code & ensure your changes follow our coding style and conventios to ensure uniformity.

**4. Commit Your Changes:** Commit your changes to your local branch with a descriptive commit message.

**5. Push Your Changes:** Push your changes to your forked repository on GitHub.
     
**6. Create a Pull Request:** Open a pull request from your branch to the main branch of the upstream repository.

**7. Review and Feedback:** We will review your pull request and provide feedback.

## Credits and Acknowledgements
- Kajanan Lingkeswaran - Github: https://github.com/KajananGit
- Zarrin Rahman - Github: https://github.com/z-for-zarrin
- Yeabsira Negash - Github: https://github.com/Y-Negash
- Gabriel Dzharadat - Github: https://github.com/GJaradat
- Marvellous Akib - Github: https://github.com/Marv3llous

## Licences
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
