import { UserContext, Layout, Home, Login, Signup, ForgotPassword, Blog, CreateBlog, BlogPage, EditBlog, Chat, NoPage } from './modules';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<UserContext>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path='/blog/:id' element={<BlogPage />} />
						<Route path='/edit_blog/:id' element={<EditBlog />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/register" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
						<Route path="/create_blog" element={<CreateBlog />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</UserContext>
		</>
	)
}

export default App
