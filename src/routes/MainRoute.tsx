import { Routes, Route, Navigate } from 'react-router-dom';
import Important from '../components/Important/Important';
import Inbox from '../components/Inbox/Inbox';
import Project from '../components/Project/Project';
import Today from '../components/Today/Today';
import Upcoming from '../components/Upcoming/Upcoming';

const MainRoute = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/today" element={<Today />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/important" element={<Important />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </main>
  )
}

export default MainRoute;