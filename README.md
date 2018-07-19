# NASA gallery

![screen shot 2018-07-19 at 17 49 14](https://user-images.githubusercontent.com/14803518/42966716-00d5839a-8b96-11e8-8775-d533612fabe4.png)

A webpage that displays photos from the NASA API. Photos can be searched for and sorted based on its title, newest and oldest creation date.

The page is also responsive to different screen sizes, with the gallery maintaining its grid structure.

![screen shot 2018-07-19 at 21 02 54](https://user-images.githubusercontent.com/14803518/42967159-48299758-8b97-11e8-997c-68a2d5c4e753.png)

### Installation

```
git clone git@github.com:puyanwei/nasa-gallery.git
cd nasa-gallery
npm install
npm start
```

I used ESLint following the [air-bnb](https://github.com/airbnb/javascript) style guide to assure quality in my code.

```
npm run lint
```

### Tech Stack

-   ES6 Javascript
-   React.js
-   CSS SASS
-   HTML
-   Axios

### Features

-   Pulls data from the NASA Image API. By default searches the keyword 'Star' when page loads
-   Dynamically adds images to the gallery
-   Search feature finds related photos based on their title on the fly with every keypress
-   Photos can be sorted alphabetically, by oldest or newest creation date
-   Structure maintains on different screen sizes without using media queries

### Process

I started out by drawing out roughly how the page would look. That helped me think about how to split up my components and structure my code.

![1](https://user-images.githubusercontent.com/14803518/42970356-05a862d8-8ba1-11e8-9be1-a0537d5349b9.jpg)

Then I broke down the process into more manageable steps. This would give me a better way to direct myself, and also help me identify any potentially tough sections that might require more attention.

Anytime I felt I was getting blocked, I would see if it is possible to break things down even further.

I used [react-create-app](https://github.com/facebook/create-react-app) to setup my template and also a similar configuration to one of my [previous tech tests](https://github.com/puyanwei/react-bookmark-manager) to help setup my SASS watchers and esLint configuration.

The first step was the build out the page structures with its components. This was done with the help of a fake gallery of which I hard coded images onto the page to help me with the layout and css.

Once that was completed, I used [Axios](https://github.com/axios/axios) to help me handle the API responses and logged the data to the console to help me understand where the specific pieces of data were. Those were the url links for the images.

My aim was to grab one url and then pass the data using a prop to my Image component, where it renders the image to the page. Once this was successful, I was able to grab the data I needed, copy it to the state and loop through all the urls and apply it to the gallery. The API always seems to send 100 responses.

I wanted to load in photos by default using the ComponentDidMount lifecycle hook but it was causing issues because the page was loading before the responses were received, even though the call was made before the render. I solved this problem by temporarily putting in a conditional loading screen which showed when my data array was empty, and showed the page when it wasn't.

![2](https://user-images.githubusercontent.com/14803518/42970357-05d0e726-8ba1-11e8-906a-fde7442d5128.jpg)

The next step was to link the API data to the search box and return information that was relevant to whatever the user types in. This involved passing the data from the SearchBox component back to the parent component and then calling the #getAPIData function to make a new call based on the user input.

I set a default parameter search for 'star' if empty, therefore allowing the loading screen to not be needed anymore.

Next steps were to make the search box apply its search based on keypresses, making it more dynamic, and adding a dropdown menu for sorting, which manipulated the data in the state.

Unfortunately there is some repetitive code for these functions, as I was unable to work out how to refactor them because the sorting loops were based on values within the state hash.

### Future Improvements

With more time I would like to fix these bugs;

-   Gallery images lose alignment if title is long and takes up two lines. Possibly limit the length of title as a potential solution
-   Refactoring sort functions so that there is less repeating code
-   More consistent loading of images. Possibly have a loading icon that shows until all images have been loaded. Find a way to speed up loading if possible?

...And would love to add these features;

-   Much nicer styling, especially for searchbox and dropdown menu
-   Feature to click on image, and have it enlarged by loading in the larger version. Display extra information next to it.
