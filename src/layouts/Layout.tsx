// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
	return (
		<>
			<p>Хедер</p>
			<nav>
				<NavLink to="counter">counter</NavLink>
				<NavLink to="user">user</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
