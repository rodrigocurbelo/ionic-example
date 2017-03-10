# Ionic performance test
I had to create this app to demonstrate Ionic's performance to some customers, they needed to decide between use Ionic + AngularJS or React native, it was all about a company-internal use app to handle any kind of internal data.

They were not sure about the performance limits that Ionic and Cordova itself could get, actually neither I was. So I decided to create this really simple app similar to the most basics mock ups they provided me to really know how much we could get.

This is a really simple app that just consists of three views, a dashboard that lists 50 posts, a post's details view, and a user profile. It connects to [RandomUser](http://randomuser.me/) to get mock data for the posts. This was a good test to know how much we could get from Ionic. I also created a similar app using React Native to show them the differences, even though I was very used to work with RN.

### Video using the app in my Nexus 5x (physical device):
https://youtu.be/hPCi3DUyyIQ

# Conclusion
Ionic definitely works pretty well, although using at least this app you can notice that there is an actual web browser there rendering the app. Even running it on a Nexus 5x when you scroll down and up you find that it is a little slower rendering results than it could be if it were made with a native UI instead.
So, Ionic or Cordova by itself is a really good option if you have a web app and you need to create a mobile version, but it, of course, will never feel completely native.
In this particular case, with this particular customer, they decided to use React Native instead, but I think Ionic is a really good solution for many cases, for sure something that I'm going to keep in mind from now on.

### Some screenshots:
Dashboard:
![screenshot_20170310-102937](https://cloud.githubusercontent.com/assets/16837996/23797050/c3059262-057c-11e7-9173-a4b1ca7db5ab.png)

Post details:
![screenshot_20170310-102759](https://cloud.githubusercontent.com/assets/16837996/23797063/cec7f50e-057c-11e7-85d9-9ca71a4f9011.png)

User profile:
![screenshot_20170310-102402](https://cloud.githubusercontent.com/assets/16837996/23797075/db49e29c-057c-11e7-9424-0b649890cf11.png)
