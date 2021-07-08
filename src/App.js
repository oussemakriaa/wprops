
import './App.css';
import Comment from './compnents/Comment/Comment';
import MainVideo from './compnents/MainVideo/MainVideo';
import Suggestions from './compnents/Suggestions/Suggestions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const comments=[
    {
      id: 1,
      name: "Leanne Graham",
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Jayne_Kuhic@sydney.com",
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nikita@garfield.biz",
      body:
        "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Lew@alysha.tv",
      body:
        "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Hayden@althea.biz",
      body:
        "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
  ]
  const suggestions =[
    {
      src:
        "https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      title: "React router dom - Dev Ed",
    },
    {
      src: "https://www.youtube.com/embed/vjf774RKrLc",
      title: "Rest Api — Dev Ed",
    },
    {
      src: "https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: "Learn Node JS — Dev Ed",
    },
    {
      src:
        "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: "Learn Redux — Dev ED",
    },
  ]
  return (
    <div className="row">
      <div className="col-md-8">
      <MainVideo/>
      <Comment comments={comments}/>
      </div>
      <div className="col-md-4">
      <Suggestions suggestions={suggestions}/>
      </div>
    </div>
  );
}

export default App;
