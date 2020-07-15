---
title: 'Stellar Spine'
date: '2017-08-21'
url: 'http://www.ece.utexas.edu/news/texas-ece-honors-students-and-faculty-awards-banquet#Capstone%20Design%20Showcase%20Winners'
subheading: 'A realtime scoliosis brace compliance sensor'
featuredImage: '../../assets/images/Stellar-Spine2.jpg'
award: true
background:
  [
    'Patients with scoliosis are prescribed to wear a brace for a set number of hours a day. However, this treatment fails if patients do not comply. With current sensors, doctors read compliance data once every 3 months. In contrast, Stellar Spine provides real-time data to encourage patients to comply with brace treatment.',
    'My role was to design the database to store patient information and create the APIs between the sensor, database, and mobile application.',
  ]
implementation: [
'We used React Native for the mobile applications to be compatible with both iOS and Android devices and Firebase Realtime Database to store patient data.',
'The patient can view past and current progress on the home screen and history screens. To incentivize the patient to wear their brace, each day that they meet their goal, they will earn a star, which can be used to earn constellations.',
]
results: [
'My team and I won First Place in the Honor/Entrepreneurial Capstone Design Showcase.'
]
images: [
  {
    path: 'assets/images/Stellar-Spine5',
    caption: 'Home Screen: View summary of compliance data for the day',
  },
  {
    path: 'assets/images/Stellar-Spine3',
    caption: 'Constellation Screen: View the stars earned for each day of compliance'
  },
  {
    path: 'assets/images/Stellar-Spine4',
    caption: 'History Screen: View brace compliance history for a day, week, month, or year. Blue indicates the patient met their goal for the day.'
  }
]
---

<h3 className="major">Background</h3>
<p>
In my last year of undergrad, my Senior Design project was to implement a real time solution to scoliosis brace compliance tracking.</p>

<p>Patients with scoliosis are prescribed to wear a brace for a set number of hours a day. However, this treatment fails if patients do not comply. With current sensors, doctors read compliance data once every 3 months. In contrast, Stellar Spine provides real-time data to encourage patients to comply with brace treatment.</p>

<h3 className="major">Solution</h3>
<DIV markdown="1">

|                       Home Screen                        |                       Constellations                        |                       Weekly Compliance                        |
| :------------------------------------------------------: | :---------------------------------------------------------: | :------------------------------------------------------------: |
| ![Home Screen](./../../assets/images/Stellar-Spine5.jpg) | ![Constellations](./../../assets/images/Stellar-Spine3.jpg) | ![Weekly Compliance](./../../assets/images/Stellar-Spine4.jpg) |

</DIV>
<table>
<tr>
<th>Home Screen</th>
<th>Constellations</th>
<th>Weekly Compliance</th>
</tr>
<tr>
<td>
<img src='../../assets/images/Stellar-Spine5.jpg' alt="hi" width="100" />
</td>
<td>
<img src='../../assets/images/Stellar-Spine3.jpg' alt="hi" width="100" />
</td>
<td>
<img src='../../assets/images/Stellar-Spine4.jpg' alt="hi"  width="100" />
</td>
</tr>
<table>
