import "./index.css"
import LoginPage from "./Components/Pages/LoginPage/LoginPage"
import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Homeboard from "./Components/Pages/HomeboardPage/Homeboard";
import AddPage from "./Components/Pages/AddPage/AddPage";
import PostPage from "./Components/Pages/PostPage/PostPage";
import HBSidebar from "./Components/Pages/HomeboardPage/Sidebar/HBSidebar";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import MessagesPage from "./Components/Pages/MessagesPage/MessagesPage"
import AuthenticationErrorPage from "./Components/Pages/AuthenticationErrorPage/AuthenticationErrorPage";
import ConversationPage from "./Components/Pages/ConversationPage/ConversationPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="Auth" element={<AuthenticationErrorPage/>}/>
          <Route path="Login" element={<LoginPage/>}/>
          <Route path="/" element={<HBSidebar/>}>
            <Route path="/Idunno" element={<Homeboard/>}/>
            <Route path="/Add" element={<AddPage/>}/>
            <Route path="/Posts/:postId" element={<PostPage/>}/>
            <Route path="/Profile" element={<ProfilePage/>}/>
            <Route path="/Messages" element={<MessagesPage/>}/>
            <Route path="/Conversation/:userId" element={<ConversationPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
