<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

`python3 -m http.server`

# Milestone 2 Project - Visit East Cork

The purpose of this project is to develop an interactive frontend website that promotes the area of East Cork in the South of Ireland. Visit East Cork is a business to consumer website that serves the dual purpose of advertising select companies or activities in the East Cork area but also allows users to discover information themselves and contact the website owner for more information.

The Visit East Cork website is responsive and contains a number of interactive elements including its main functionality based on the Google Maps Javascript API. Elements of this website were developed from the Code Institute coursework as well recommendations from my mentor and independent online research and observations.

You can view the live website here: [Visit East Cork](https://d-mcalpin.github.io/Visit-East-Cork/)

![Visit East Cork mockups on various devices](assets/images/mockups/vecMockup.jpg)

<span id="ux"></span>

## 1. User Experience

Visit East Cork is a business to consumer website that allows users to discover the local area of East Cork and find out about local facilities, businesses and attractions. The Google Maps element contains a number of custom markers with info windows that can be edited. This would allow the website owner the opportunity to generate advertising revenue from recommended locations in the area while also allowing website users the opportunity to interact with the map and find out more information about the area themselves.

### 1.1 User Stories
- As a local business owner in the East Cork area, I can showcase my business on the Visit East Cork homepage via the Google Maps API interface. This can display images, informationa and links about my business. 

- As a tourist seeking to find more information about East Cork, I can interact with the map aswell as reading the information about local areas displayed on the homepage. Should I wish to find out more information I can contact the website owner directly from the contact form. I can also view the current weather forecast in Cork.

- As a local resident of East Cork, I can interact with the Visit East Cork website to find out more information about my local area, particularly relating to attractions or facilities that I may not know about. I can also view the local weather forecast and contact the site owner if I have any queries.

### 1.2 Strategy
The goal of the project is to create an informative website that has the potential to generate revenue for the website owner through sponsored recommendations visible on the Google Maps API. The website intends to keep users interested through continuously updated local information with the potential to offer special deals on local businesses to website users.

### 1.3 Scope 
All of Visit East Cork's content is contained within a single webpage. Users do not have to navigate away from the page to use different elements including contacting the website owner and interacting with the Google Maps API. Elements of the homepage are interactive including the buttons which showcase the local area. These toggle information and interact with the map to show users where these areas are located.

### 1.4 Structure
Based on the Scope Plane, Visit East Cork was developed to provide users with information within moments of arriving at the page. A welcome image entices users to scroll down and the Google Maps API invites them to click on custom markers to discover the local area. A contact form and contact information is within a scroll of the map.

### 1.5 Skeleton
A mobile first approach was taken to designing the website. The original wireframes were created using Balsamiq and can be found below:

- Mobile Wireframe PDF - <a href="https://drive.google.com/file/d/1TqIiR8u5vYMyz_Q2usJRWyE0L0NCeRrr/view?usp=sharing" rel="noopener" target="_blank">mobile version in PNG</a>.
- Desktop Wireframe PDF - <a href="https://drive.google.com/file/d/1rjnoTlbCzB_b-Os8TaWMGbwpYFu89ySf/view?usp=sharing" rel="noopener" target="_blank">desktop version in PNG</a>.

The wireframe mockups gave me a basic idea of how best to lay out each individual element that I wanted to incorporate into the project and how that would impact and enhance the user experience. As the project progressed, how best to place each of these elements became apparent.

### 1.6 Surface
A blue and white colour scheme was initially decided upon to give a clean and crisp image to the site, I decided to add a teal colour, particularly for buttons and hover elemenets. I chose the Josefin font from Google Fonts as I found that it reminded me of the text on classic travel posters.  Shadows and rounded borders appear on a number of elements on the site to add depth and to keep it interesting.
***

<span id="features"></span>

## 2. Features 

### 2.1 Welcome Image
Users are welcomed to the page with a large hero or welcome image and a Jumbrotron containing a welcome message. The image zooms slowly towards to user when the page loads.
Text below the main image gives users instructions on how to use the site.

### 2.2 Information Cards with Toggle and Map Zoom Features
The information cards below the site instructions utilise JQuery Toggle to provide users with information on areas of East Cork. When the user clicks on the "Show More" button on each card, more informaiton will appear about that location and the map will centre on that location also.

### 2.3 Google Maps API
The Google Maps section of the website contains a large map with preloaded, customised markers that show a particular point of interst on the map. When w user clicks on the custom icon, an information window will be displayed showcasing an image of the point of interest and its name.

### 2.4 Google Places Autocomplete Search
A custom search bar is embedded in the top left corner of the map. This search bar allows users to search the area of the map for other points of interest that are not highlighted by custom markers. This search will show local businesses including shops, bars, restaurants, hotels and other businesses within the boandaries of the map.

### 2.5 Contact Form
Below the map, a contact form invites users to send a message to the site owner if the require further information. This is a functional and opeerational contact form powered by EmailJS. When users submit their query after filling out the required boxed, a message will display in the browser window telling them if their message was sent successfully or if it failed.

### 2.5 Footer
The footer of the Visit East Cork webpage contains contact informaion and social media links that invite users to keep in contact with the site owner. A weather forecast and current temperature display for the Cork area is also contained within the footer. This is a custom forecast provided by the Openweathermap API.

### 2.6 Features Left to Implement
After reading the Google Maps Javascript API, there is an incredible amount of functionality that can be added to custom maps. In order to monetise the website richer and more detailed information on local businesses could be added to the map, this would provide the website owner with more opportunities to showcase local businesses on the Visit East Cork website.
***
<span id="tech"></span>

## 3. Technologies Used

### 3.1 Languages 

I used the following languages for the project:
- **[HTML/HTML5](https://en.wikipedia.org/wiki/HTML5)**
  - The project used **HTML/HTML5** as this is the essential language of websites.

- **[CSS/CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)** 
  - The project used **CSS/CSS3** to provide the styles for the website.

- **[Javascript](https://en.wikipedia.org/wiki/JavaScript)** 
  - The project used **Javacsript** to provide the functionality and customisation for the contact forn, card toggle, Google Maps API and the Openweathermap forecast.

### 3.2 Frameworks 
- **[BootStrap 4](https://getbootstrap.com/)**
  - I used the **Bootstrap 4** Framework to design the website and add useful components and utilities including:
    - [Flexbox](https://getbootstrap.com/docs/4.5/utilities/flex/)
    - [Jumbotron](https://getbootstrap.com/docs/4.5/components/jumbotron/)
    - [Cards](https://getbootstrap.com/docs/4.5/components/card/)
    - [Images](https://getbootstrap.com/docs/4.5/content/images/)

### 3.3 Libraries

- **[JQuery](https://jquery.com)**
    - The project uses **JQuery** to add toggle functionality to the East Cork Area information cards.

- **[Fontawesome](https://fontawesome.com/)**
    - The project uses **Fontawesome** to add attractive icons to each of thearea information cards and the social media links.

- **[Google Fonts](https://fonts.google.com/)**
    - The Quicksand Font from Google Fonts is used throughout the project in different weights and colours.

- **[Google Places Library](https://developers.google.com/maps/documentation/javascript/places)**
    - The Google Places Library allows users to seacrh for places using the search function on the map and can return information on those places including addresses, images, user reviews and opening hours.

### 3.4 APIs

- **[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview)**
    - The project uses **Google Maps Javascript** to generate the primary website attraction, the local area map. In order to use this API on a website, a developed must create a billing account and generate an API key. This key and account allows the owner to access the maps database. In order to access places through the Autocomplete Search, the developer must also link the Google Place Library to their API key and billing account. This can be challenging as it is advised that developers restrict their keys do that they are not abused by a third party. This can sometimes cause the Gogole Maps API to fail if Google does not recognise the website that is trying to load the map. 

- **[EmailJS API](https://www.emailjs.com/)**
    - The project uses **EmailJS** to add functionality to the website contact form. This API was utilised in a Code Institute Project and it allows the developer to link the contact form to their email address and inturn provides a method of communication for the website users. EmailJS requires developers to set up an account and link it to their email address.

- **[Open Weather Map API](https://openweathermap.org/api)**
    - The project uses **Open Weather Map API** to add weather forecast functionality to the footer of Visit East Cork. Like the Google Maps API, this API requires developers to set up an account and use an API Key to access weather information specific to their area. This is a straightforward process.

### 3.4 IDE

- **[GitPod](https://www.gitpod.io/)**
    - Gitpod was used to develop the website and style each element before deployment.

### 3.5 External Hosting

- **[GitHub](https://github.com/)**
    - This project uses the GitHub hosting service and is saved in a GitHub repository.

- **[Google Drive](ttps://drive.google.com/)**
    - The wireframe PNG files are saved to a Google Drive account and are openly accessible.
***
<span id="test"></span>

## 4. Testing

- **[Balsamiq](https://balsamiq.com/)**
    - I used Balsamiq to design the original wireframes for the project and test how the layout looked. I reverted to Balsamiq when considering changes in the project's design.

- **[GTMetrix](https://gtmetrix.com/)**
    - GTMetrix was used to test the loading speed of each page and to find out if any elements were creating long loading times.

- **[W3C HTML Validator](https://validator.w3.org/)**
    - The W3C HTML Validator checked the website for HTML validity errors.

- **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**
    - The CSS Validator checked for validity errors in the website's CSS page.

- **[Autoprefixer CSS Online](https://autoprefixer.github.io/)**
    - The Autoprefixer ensured that vendor prefixes were added to my CSS.

- **[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)**
    - Google Chrome's DevTools were used to inspect elements of the website and adjust them to ensure that they were effective and responsive at different screen sizes. DevTools was also used to identify errors in my code and to test how changing certain elements would effect the overall look and feel of the website.

### 4.2 Testing User Stories

1. As a visitor to East Cork seeking information on the area:
     - I am given an introduction to the website and how to use it.
     - I can access information on local areas by clicking the "Show More" button on the Area cards.
     - The "Show More" button also directs me to the relevant area on the map where I can see local amenities.
     - I can search for other establishments locally using the search bar.
     - Should I require assistance or further information, I can contact the site owner via the funcitoning contact form.


2. As a resident of East Cork:
    - I can find out information about my locality including amenities near me.
    - I can search for local businesses on the map and then contact those businesses.
    - I can contact the website owner through the functioning contact form should I require further information the local area.
    - I can check the upcoming weather forecast for the local area.


3. As a local business owner:
    - I can see that the website owner can showcase local businesses through custom map markers.
    - I can find out which local businesses are promoting their offering on the website.
    - I can contact the website owner via the functioning contact form to enquire about showcasing my business.


### 4.3 Device Testing

I utilised Google Chrome's DevTools to test the responsivness of the website at different screen sizes throughout the project. Once the project was approximately 70% complete, I tested it using a Huawei P9 Lite and an Apple iPhone 11 mobile device and an Acer tablet device. The website worked well on both devices.
I tested the desktop functionality of the Visit East Cork website on Google Chrome and Microsoft Edge.

#### On screen sizes of tablet size and below:
- The Leadership Goals logo will only display the lion image and not the text. The navbar will compress into a burger icon with a dropdown effect when pressed. 
- The two card carousel will be replaced with a single card carousel on the homepage.
- Cards and divs are responsive and will align with the mobile view. 
- The galllery will align vertically on the gallery page.
- The Leadership Goals logo in the footer disappears.



## Testing

**W3C HTML Validator**
* Ran index.html through validator to check there were no syntax errors: 
    * Failed – 3 images were missing alt tags
        * Alt tags added and tested again
	* Passed


**W3C CSS Validator**
W3C CSS Validator
* Ran style.css through validator to check there were no syntax errors: 
    * Passed with no errors

**User stories**

*As a user who is looking to visit, or currently visiting Mykonos, I want to learn more about the best things to see on Mykonos, recommended restaurants on Mykonos, and learn about the different areas of Mykonos.*
* Recommendations on the website have been split into 3 simple and clear categories: Attractions, Restaurants and Areas.
* These sections are available to the viewer upon landing on the site in the simple and clean navigation.
    * When a user clicks on one of these navigation items, the site is expected to take the user directly to the corresponding section
        * Upon testing, the site responds as expected. (Full navigation testing below).
* The 3 categories are again available below the jumbotron, with images to represent each category, a title, and clear ‘Show Me’ call to action buttons.
    * When a user clicks on one of these ‘Show me’ buttons, the site is expected to take the user directly to the corresponding section
        * Upon testing, the site responds as expected and takes the user to the selected section of the website. (Full 3 Topics testing below).
* The 3 category sections are also titled with headers clearly to match the category names.
* All of these options give the user multiple ways to find the content for the best things to see on Mykonos.

![Show me more... / Show me less... toggle buttons](assets/readme_docs/testing_toggle.jpg)

*As a user, I want to be able to contact the admin of the website to be able to ask for more information.* 
* A clear Contact Us navigation item is visible on the main navigation bar as soon as the user lands on the site. 
* This links the user to a Contact Us form at the bottom of the homepage, making it easy for the user to send a message to the site owner, and for the user to not have to leave the site to send the message from an email client.
* When a user clicks on the Contact Us navigation item, the site is expected to take the user to the Contact Us form, which the user can then fill in. 
    * Upon testing, the site acts as expected and takes the user to the form. (Full Contact form testing below).

*As a user, I want to be able to locate the recommended places shown to me on the website on a map.*
* All recommendations have been individually added to a Google Map embedded into the website.
* Each item has been added to the map using 1 of 3 custom icons which represent each of the 3 categories, making the markers clear and distinguishable.
* Each marker includes a popup label which includes the same image and title of the recommendation as to the listed recommendation further down the page for familiarity and ease of location, as well as a link back to the recommendation listed on the homepage.
* The map can be found easily by the user via the main navigation item ‘Map’
* The site is expected to take the user to the map section of the website when the ‘Map’ navigation item is clicked.
    * Upon testing, the site acted as expected, taking the user swiftly and simply to the map. (More map and navigation technical tests conducted below.)

*As a user, I want to be able to find other places on a map, such as restaurants, cafes, beaches and more.*
* By installing the Google Places API and a search box, users can type in a search term or specific place.
* Results are returned by Google Places and marked on the map with a red marker.
* The map and search bar can be found easily by the user via the main navigation item ‘Map’ 

![Contact navigation, contact form, and map features](assets/readme_docs/testing_screenshots.jpg)

**Further testing**
* The website as tested on Google Chrome, Internet Explorer and Firefox browsers.
* The website was viewed on a variety of devices including Desktop, Laptop, iPad, and the mobile options provided by Google chrome developer tools.

**You can find a full document to all the website testing [by clicking here](assets/readme_docs/testing.pdf)

## Design

**Logo:** 
I decided to stick with a traditional Greek design for the logo with a Greek-style font and bright blue colour. The font is called Adonais and is 100% free to use from the website [DaFont](https://www.dafont.com/) 

**Fonts**  
I wanted to keep the rest of the site nice, clear and simple. Therefore, I decided to pair the Google fonts Raleway Light for the headers with Opens Sans Regular for the body text. Both fonts were assigned the backup front of sans-serif.

**Colours:** 
In keeping with a clean and clear website, I opted to use just one main accent colour to complement the lovely colours of the photos. Greece, and the Greek Islands, are known for this bright blue, so I chose one which I felt was a nice modern blue, and once which would be great for text to set out on. This was coupled with a light grey for hover state on the navbar, as well as a dark grey and off white for the copy.

* Blue accent colour: #0086FF
* Hover grey nav bar: #d0d0d5
* Off White: #F8F8FF
* Grey: #222222

## Deployment
I deployed Mykonos Recommended GitHub pages using the following steps:
1. Logging into my GitHub account and locating my repository
1. Clicking on the Settings icon (near the top right of the page)
1. Scrolling down the page to locate the 'GitHub Pages' section
1. I selected 'Master branch' in the dropdown
1. This deployed my project to the URL: https://michellelclement.github.io/mykonos-recommended-MS2/

[Click here to view the live Mykonos Recommended website](https://michellelclement.github.io/mykonos-recommended-MS2/) 

## Credits

**Content**
Website Text: All the text for the website was written by myself.

**Media**
All images used on the website were a mix of my own photographs, Google Images or images from Restaurant social channels.
* Restaurants – Images from their social media pages or website
* Ornos & Platis Gialos – Google Images (labelled for reuse with modification)
* All other photos are my own
* Apple products mockups for README doc by Vinay Mittal via [Graphic Burger](https://graphicburger.com/)
* iPhone 6 Mockups for testing and README document obtained from Graphic Burger and created by [p-px](http://p-px.com)

## Acknowledgements
Google Maps Custom Icons: I used [Maps Icons Collection](https://mapicons.mapsmarker.com) for the custom markers on the map. The website allowed me to customise the markers to my own colourway before implementing on the website.

In addition to assistance from my mentor and the slack community, I also found answers to some of my questions and troubleshooting errors by searching previously answered questions on the [Stack Overflow](https://stackoverflow.com/) website.

A thank you to Murray Bealby for taking the time to look at my project via the Peer Code Review Slack channel and giving a few tips on improving some areas of my project.

Special Thank you to my fantastic mentor ADEGBENGA ADEYE for helping me with my ideas and directing me on how to fix errors and bugs.

**Additional Support**
Due to the complex nature of Google APIs, I followed a couple of tutorials to help implement adding multiple custom markers with custom icons, plus installing the Google Places with a search bar. Both tutorials were fantastic and really helped to cement how to do this with more explanation on the why, and how, compared to Google’s documentation. I have marked with comments on the map.js file the code which was assisted by both tutorials. In both cases, I implemented as much of the code myself as possible using my knowledge from the course material and Google’s Documentation, and then the tutorials helped implement the exact features and functionality I desired.

* [Google Maps Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw)
* [Google Maps Places Tutorial](https://www.youtube.com/watch?v=oVr6unKZbg4)

As advised by my mentor, I decided to add a 'Back To Top' scroll button due to the page being quite long on mobile devices. This isn't something which has been covered in the course material, so I followed the instructions to do this as provided by [W3Schools](https://www.w3schools.com/).