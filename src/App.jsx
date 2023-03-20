import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Manoel Lima"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ea, assumenda beatae consequuntur doloribus voluptate qui vel maxime. Sapiente aspernatur ex facilis nisi distinctio esse eum, odio cupiditate sit. Voluptate?"
          />
          <Post
            author="João da Silva"
            content="Eius ea, assumenda beatae consequuntur doloribus voluptate qui vel maxime."
          />
        </main>
      </div>
    </div>
  )
}

// export default App