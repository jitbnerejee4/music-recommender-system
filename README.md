Name: Jit Banerjee
Email: jitbaner@usc.edu
Status (junior, senior, graduated): Graduate Student
Link to Project Github: https://github.com/jitbnerejee4/music-recommender-system

Project Name: Music Recommender System

1. Brief Explanation of Project: I have developed a Music Recommender System where the user inputs his/her mood or any text he/she wants and based on the input my application recommends the user different music from Spotify. Also, when the user hover on a music item the background color changes to the “dominant color” present in the album art. 

2. How you Built it: I have used Angular in the front-end and Flask in the backend. The system works in the following way:
•	The front-end consists of two components Search Component and Result Component.
•	The Search Component receives input from the user and sends it to the backend.
•	In the backend I am using ChatGPT API to extract the mood from the input text.
•	Upon extracting the mood, creating a custom query, and passing the query to Metaphor API along with the options.
•	After receiving the results from the Metaphor API, the system checks if the URL corresponds to a playlist, if it does then the system makes a call to Spotify API along with the playlist id. Upon receiving the response from Spotify API, I am extracting the track id and album art URL from the response. 
•	Then I am using k-means clustering algorithm to extract the dominant color from the image present in the album art URL. I have used Scikit Learn, NumPy and PIL to achieve this. 
•	Upon receiving the dominant color, I am storing the track id and it’s corresponding dominant color as a single object in an array (only storing 20 items considering the nature of the project and for the lack of infrastructure).
•	Then the array (containing track ids and dominant colors) along with the mood is returned to the front-end as JSON object.
•	The Search Service receives the data and sends it to the Result Component. In the Result Component, I am looping through each item and displaying each item row wise and setting id for each item which is basically it’s index.
•	When a user hovers over a music item (iframe) I am fetching it’s id and get the dominant color present in that index and then set the background color with that dominant color. 

3. Challenges/Feedback on the API: I had no issues working with Metaphor API. Only sometimes it is not returning expected result. May be once in 100 queries. But overall, I have no complain. 

4. Why you’re interested in Metaphor :) I liked your product and I always prefer working with creative people. I strongly believe that creativity is the driving force behind innovation and progress. In today's fast-paced technological landscape, it's not just about knowing the tools and technologies, but about how you leverage them in unique ways to solve problems and deliver value. Thus, I believe that Metaphor is the perfect place for me, where I can learn, grow, be creative and contribute. 

