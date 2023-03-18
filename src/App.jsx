import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Manoel Lima"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ea, assumenda beatae consequuntur doloribus voluptate qui vel maxime. Sapiente aspernatur ex facilis nisi distinctio esse eum, odio cupiditate sit. Voluptate?"
      />
      <Post
        author="João da Silva"
        content="Eius ea, assumenda beatae consequuntur doloribus voluptate qui vel maxime."
      />
    </div>
  )
}

// export default App