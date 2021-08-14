/* eslint-disable @next/next/no-img-element */
import { ActiveLink } from '../ActiveLink'
import SignInButton from '../SignInButton'
import styles from './styles.module.scss'

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="lemo.news" />
				<nav>
					<ActiveLink activeClassname={styles.active} href="/">
						<a>Home</a>
					</ActiveLink>
					<ActiveLink activeClassname={styles.active} href="/posts">
						<a>Posts</a>
					</ActiveLink>
				</nav>

				<SignInButton />
			</div>
		</header>
	)
}
