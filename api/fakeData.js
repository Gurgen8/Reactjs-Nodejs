const user = {
  id: 1,
  username: "john",
  avatar:
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
};

const videos = [
  {
    id: 1,
    title: "JavaScript in One Video",
    views: "8.1M",
    date: "1 week ago",
    duration: "4:00",
    img: "https://i.ibb.co/VpfPvcj/1.png",
    channel: {
      name: "Amazing Developer",
      avatar:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 2,
    title: "React.js Full Course",
    views: "1.1M",
    date: "2 weeks ago",
    img: "https://i.ibb.co/0Vwqjrw/2.png",
    duration: "11:00",
    channel: {
      name: "Nice Dev",
      avatar:
        "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 3,
    title: "Watch my amazing day in job",
    views: "420K",
    date: "2 days ago",
    img: "https://i.ibb.co/MGBtHF4/3.png",
    duration: "8:00:00",
    channel: {
      name: "It Professor",
      avatar:
        "https://images.pexels.com/photos/3149036/pexels-photo-3149036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 4,
    title: "If you do this, You are not a developer!",
    views: "820K",
    date: "1 week ago",
    img: "https://i.ibb.co/ZMFYyst/4.png",
    duration: "14:00",
    channel: {
      name: "Codeloper",
      avatar:
        "https://images.pexels.com/photos/2659177/pexels-photo-2659177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 5,
    title: "Build an app without code and sell it",
    views: "134K",
    date: "1 day ago",
    img: "https://i.ibb.co/0n3qXLk/5.png",
    duration: "5:17",
    channel: {
      name: "Codeinvestor",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 6,
    title: "People think I'm a master coder!",
    views: "13M",
    date: "3 days ago",
    img: "https://i.ibb.co/mbK0N40/6.png",
    duration: "06:09",
    channel: {
      name: "Devrella",
      avatar:
        "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 7,
    title: "My thoughts as an ex Amazon CEO",
    views: "3.1M",
    date: "1 month ago",
    img: "https://i.ibb.co/g7j1MBY/7.png",
    duration: "23:15",
    channel: {
      name: "Technopat",
      avatar:
        "https://images.pexels.com/photos/7594067/pexels-photo-7594067.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 8,
    title: "Do These! If you want to be a developer",
    views: "92K",
    date: "5 days ago",
    img: "https://i.ibb.co/dKCBD0r/8.png",
    duration: "2:56",
    channel: {
      name: "Li",
      avatar:
        "https://images.pexels.com/photos/7610757/pexels-photo-7610757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  {
    id: 9,
    title: "Life  programmers",
    views: "999K",
    date: "20 days ago",
    img: "https://potomac.edu/wp-content/uploads/2020/05/problem-solving-skills-e1590502433369.jpg",
    duration: "3:06",
    channel: {
      name: "Tom",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW92BXjDT_ol0T7SHgPhpNXF1aHUp4CZDjhw&usqp=CAU",
    },
  },
  {
    id: 10,
    title: "new song!",
    views: "32K",
    date: "16 days ago",
    img: "https://i.ytimg.com/vi/yTCDVfMz15M/maxresdefault.jpg",
    duration: "3:06",
    channel: {
      name: "Harri Retnap",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XBwdJaSwWX0Qfwo8SflZujf3ywLB5LEQtw&usqp=CAU",
    },
  },
  {
    id: 11,
    title: "the models",
    views: "106K",
    date: "45 days ago",
    img: "https://cdn.pastemagazine.com/www/articles/2019/12/10/musicvideos_2019_main.png",
    duration: "3:06",
    channel: {
      name: "Jim Hajime",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNlLucOWxFWwG-pVBeoye-5GUyWUucRiDjme6EHJw8QPRCk9M2h-Y1YhdG_C9NX2XnuM&usqp=CAU",
    },
  },
  {
    id: 12,
    title: "new starts showBisness",
    views: "392K",
    date: "23 days ago",
    img: "https://townsquare.media/site/812/files/2019/12/asap-rocky-dababy-doja-cat-tyler-the-creator-1.jpg?w=980&q=75",
    duration: "3:06",
    channel: {
      name: "Martin Apkins",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHP5bO_NDtjCCVKFFytpJ4nLo60i-23Qb2HKvK-UCBOKDX5xEzKF8qnV2Ybe7FBnbmaY&usqp=CAU",
    },
  },
  {
    id: 13,
    title: "junior hardwaress",
    views: "99K",
    date: "20 days ago",
    img: "https://www.lego.com/cdn/cs/set/assets/blta8e9bc0ae203ee18/Mindstroms-Learn_Program-Intro_Image-Sidekick-Standard.jpg",
    duration: "3:06",
    channel: {
      name: "Aaron Kober",
      avatar:
        "https://uniteforchange.com/images/2021/11/sm/man-smiling-in-crowd.jpeg",
    },
  },
  {
    id: 14,
    title: "only python",
    views: "222K",
    date: "20 days ago",
    img: "https://thumbs.dreamstime.com/b/code-screen-programming-writing-script-programmer-editing-background-developer-software-source-171572474.jpg",
    duration: "3:06",
    channel: {
      name: "Demba Ba",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYwq_uzjzNHZQ0-ZUvZEJBX2tvp-QaKKCgQ&usqp=CAU",
    },
  },
  {
    id: 15,
    title: "how to devops enginner",
    views: "118K",
    date: "99 days ago",
    img: "https://i.ytimg.com/vi/a9_oMNSgX2g/maxresdefault.jpg",
    duration: "3:06",
    channel: {
      name: "Alex Le",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU0BGq74r8sbAtZEyYnt_21YIbIvmIlXIri9Slg4AM7ukj1YdurA8rBkCjNwT0af3TiU&usqp=CAU",
    },
  },
  {
    id: 16,
    title: "sports",
    views: "122K",
    date: "2 days ago",
    img: "https://m.gpone.com/sites/default/files/images/2022/article/foto/01/MotoGP/generic/marquez-viso-1641836062.jpg",
    duration: "3:06",
    channel: {
      name: "john Doe",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGqrPNhqTJm4c7tUupvZwcLkOjNkr3rM0-uNWINFWDpJiMmyqYiYdc0Ecl7UbxIhmFqw&usqp=CAU",
    },
  },
  {
    id: 17,
    title: "apple company",
    views: "12K",
    date: "120 days ago",
    img: "https://static.dw.com/image/36820998_303.jpg",
    duration: "3:06",
    channel: {
      name: "jack Hodor",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTub4Nq76qpL33Rc4tqRQUcnXggsAytGyqpow&usqp=CAU",
    },
  },
];

module.exports = { user, videos };
