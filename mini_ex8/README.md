# Tumblrbot

![alt text](search.png)

[Try out our search program out!](https://rawgit.com/CamillaMondrup/mini_ex/master/mini_ex8/index.html)

This program was created together with [Camilla](https://github.com/CamillaMondrup) from my study group.

## What is the program about? which API have you used and why?
Our program is a search enginge where the user can type in a word that they like or find interesting, and when you hit the search button, the program will get photos from the Tumblr database, that are tagged with the specific word that the user typed in. We used the Tumblr API, because we originally wanted to create something like a collage, but with all different sorts of content such as texts, photos, videos and so on, and this is exactly what you can find posted to Tumblr. 

### (individual)Can you describe and reflect your process of making this mini exercise in terms of acquiring, processing, using and representing data? How much do you understand this provided data? How do platform providers sort the data and give you the selected data?

At first we needed to decide which API to use, this was our starting point. We didnt have a specific Idea of what to make, because we didnt have the aqquired knowledge to imagine what was possible to make using an API. We chose to use tumblr' s API which seemed easy to understand, there was a lot of different possibilities of what data we could query. We wanted to query post from tags, which is used a lot on tumblr. 

Luckily there was examples of the different API' s on tumblrs webpage. I am not sure I could have figured out how to combine the different elements of the API if these examples hadnt been available. We wanted the user to be able to query something on their own, so we had to make a syntax which created the whole API/url out of different elements and the users input. HEre we took inspiration from both Winnies code, and daniel Shiffmans videoes. 

In making this program I found out how the console.log can be a help in figuring out where in the program an error is found. Of cause the console logs obvious errors, but working with this API some things or errors werent visible for us, but by letting the different functions we made being logged in the console we could manage to detect where the error happened. 

Before everything we had to look a our API link in the browser, and the data was displayed in a JSON format. Luckily, this is at nice way to be presented with data, so all we had to do, was to look closely and find the correct path of the ojbects we wanted the page to show. One problem was, that we wanted to display both text post, photos and videoes, which was the three different kind of post available. Put we couldnt figure out the correct syntax for displaying all of these different elements. So we decided to only display pictures, and could define a picture post from an if statement using the path to the post type in the JSON file, and letting the program determine whether or not the type was a photo post or not. I found this elememt specifically interesting, because this  way of determining whether or not it was "correct" information could be used in many ways, when using API's. 

How platform providers sort the data I am not sure, I didnt think og reflect futher than of the representation of the data, when I first was presented with a JSON file which was easy to understand. One thing we noticed was, that we were not allowed to query 100 of post, but from 18-20. So there was some restrictions that functioned to somehow keep most of the information on tumblrs own page. 

One thing that was completely new for me, was that we had to make some of the code in HTML to display the pictures. It made me a bit interested in learning more HTLM, and maybe CSS, so I in the futher would be able to combine some of these different programming languages into something usefull. 

### (individual)Try to formulate a question in relation to web APIs or querying processes that you want to investigate further when you have more time.

There is a big difference in how much data you are allowed to query from API to API. One thing I would find interesting to do, and maybe a bit narcissistic, is to see how much data about my self I can extract from different API's, just to create and awareness of what data is actually available for other people about me, and other persons. 



